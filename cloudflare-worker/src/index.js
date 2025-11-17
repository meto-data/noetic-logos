/**
 * Visitor Presence Tracking Worker v2.0
 * Comprehensive analytics with advanced metrics
 * + Chat System v1.0
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://noetic-logos.pages.dev',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

// Chat config
const CHAT_MAX_MESSAGE_LENGTH = 500;
const CHAT_MAX_NICKNAME_LENGTH = 20;
const CHAT_USER_TTL = 60; // seconds
const CHAT_MESSAGES_TTL = 24 * 3600; // 24 hours
const CHAT_MAX_MESSAGES = 100;

// Helper: Parse User-Agent
function parseUserAgent(ua) {
  if (!ua) return { device: 'Unknown', browser: 'Unknown', os: 'Unknown', isMobile: false };

  let device = 'Desktop';
  let browser = 'Unknown';
  let os = 'Unknown';
  let isMobile = false;

  // Device detection
  if (/Mobile|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    isMobile = true;
    device = /iPad|Tablet/i.test(ua) ? 'Tablet' : 'Mobile';
  }

  // Browser detection with version
  if (ua.includes('Firefox/')) {
    const match = ua.match(/Firefox\/(\d+)/);
    browser = match ? `Firefox ${match[1]}` : 'Firefox';
  } else if (ua.includes('Edg/')) {
    const match = ua.match(/Edg\/(\d+)/);
    browser = match ? `Edge ${match[1]}` : 'Edge';
  } else if (ua.includes('Chrome/')) {
    const match = ua.match(/Chrome\/(\d+)/);
    browser = match ? `Chrome ${match[1]}` : 'Chrome';
  } else if (ua.includes('Safari/') && !ua.includes('Chrome')) {
    const match = ua.match(/Version\/(\d+)/);
    browser = match ? `Safari ${match[1]}` : 'Safari';
  } else if (ua.includes('Opera') || ua.includes('OPR/')) {
    browser = 'Opera';
  }

  // OS detection
  if (ua.includes('Windows NT 10')) os = 'Windows 10/11';
  else if (ua.includes('Windows NT 6.3')) os = 'Windows 8.1';
  else if (ua.includes('Windows NT 6.2')) os = 'Windows 8';
  else if (ua.includes('Windows NT 6.1')) os = 'Windows 7';
  else if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac OS X')) {
    const match = ua.match(/Mac OS X (\d+[._]\d+)/);
    os = match ? `macOS ${match[1].replace('_', '.')}` : 'macOS';
  }
  else if (ua.includes('Android')) {
    const match = ua.match(/Android (\d+)/);
    os = match ? `Android ${match[1]}` : 'Android';
  }
  else if (ua.includes('iPhone') || ua.includes('iPad')) {
    const match = ua.match(/OS (\d+)/);
    os = match ? `iOS ${match[1]}` : 'iOS';
  }
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('CrOS')) os = 'Chrome OS';

  return { device, browser, os, isMobile };
}

// Helper: Parse referrer to get source
function parseReferrer(referrer, currentHost) {
  if (!referrer) return { source: 'Direct', medium: 'none', campaign: 'none' };

  try {
    const url = new URL(referrer);
    const host = url.hostname.toLowerCase();

    // Skip if same site
    if (host.includes(currentHost)) {
      return { source: 'Internal', medium: 'internal', campaign: 'none' };
    }

    // Social media
    if (host.includes('facebook.com') || host.includes('fb.com')) {
      return { source: 'Facebook', medium: 'social', campaign: 'organic' };
    }
    if (host.includes('twitter.com') || host.includes('t.co') || host.includes('x.com')) {
      return { source: 'Twitter/X', medium: 'social', campaign: 'organic' };
    }
    if (host.includes('linkedin.com')) {
      return { source: 'LinkedIn', medium: 'social', campaign: 'organic' };
    }
    if (host.includes('instagram.com')) {
      return { source: 'Instagram', medium: 'social', campaign: 'organic' };
    }
    if (host.includes('reddit.com')) {
      return { source: 'Reddit', medium: 'social', campaign: 'organic' };
    }
    if (host.includes('youtube.com')) {
      return { source: 'YouTube', medium: 'social', campaign: 'organic' };
    }
    if (host.includes('tiktok.com')) {
      return { source: 'TikTok', medium: 'social', campaign: 'organic' };
    }

    // Search engines
    if (host.includes('google.')) {
      return { source: 'Google', medium: 'search', campaign: 'organic' };
    }
    if (host.includes('bing.com')) {
      return { source: 'Bing', medium: 'search', campaign: 'organic' };
    }
    if (host.includes('yahoo.')) {
      return { source: 'Yahoo', medium: 'search', campaign: 'organic' };
    }
    if (host.includes('duckduckgo.com')) {
      return { source: 'DuckDuckGo', medium: 'search', campaign: 'organic' };
    }
    if (host.includes('yandex.')) {
      return { source: 'Yandex', medium: 'search', campaign: 'organic' };
    }

    // Messaging
    if (host.includes('whatsapp.com') || host.includes('wa.me')) {
      return { source: 'WhatsApp', medium: 'messaging', campaign: 'organic' };
    }
    if (host.includes('telegram.org') || host.includes('t.me')) {
      return { source: 'Telegram', medium: 'messaging', campaign: 'organic' };
    }

    // Default: use hostname
    return { source: host, medium: 'referral', campaign: 'none' };
  } catch (e) {
    return { source: 'Unknown', medium: 'unknown', campaign: 'none' };
  }
}

// Helper: Get date/time keys
function getDateKey(date = new Date()) {
  return date.toISOString().split('T')[0];
}

function getHourKey(date = new Date()) {
  return date.getUTCHours().toString().padStart(2, '0');
}

// Store comprehensive historical data
async function recordHistory(env, eventData) {
  const dateKey = getDateKey();
  const dailyKey = `daily_${dateKey}`;

  let dailyStats = await env.VISITOR_HISTORY.get(dailyKey, 'json') || {
    date: dateKey,
    uniqueVisitors: [],
    uniqueDevices: [],
    sessions: {},
    pageViews: {},
    devices: {},
    browsers: {},
    operatingSystems: {},
    countries: {},
    cities: {},
    trafficSources: {},
    referrers: {},
    hourlyActivity: {},
    exitLinks: {},
    scrollDepths: {},
    timeOnPage: {},
    clickEvents: {},
    searchQueries: [],
    newVsReturning: { new: 0, returning: 0 },
    bounceCount: 0,
    totalSessions: 0,
    avgSessionDuration: 0,
    peakConcurrent: 0
  };

  const { type, data } = eventData;

  if (type === 'heartbeat') {
    // Track unique visitor
    if (!dailyStats.uniqueVisitors.includes(data.sessionId)) {
      dailyStats.uniqueVisitors.push(data.sessionId);
    }

    // Track unique device
    if (data.deviceId && !dailyStats.uniqueDevices.includes(data.deviceId)) {
      dailyStats.uniqueDevices.push(data.deviceId);
    }

    // Session tracking
    if (!dailyStats.sessions[data.sessionId]) {
      dailyStats.sessions[data.sessionId] = {
        deviceId: data.deviceId,
        startTime: Date.now(),
        pages: [],
        events: [],
        source: data.source,
        country: data.country,
        city: data.city
      };
      dailyStats.totalSessions++;

      // New vs Returning
      if (data.isNewVisitor) {
        dailyStats.newVsReturning.new++;
      } else {
        dailyStats.newVsReturning.returning++;
      }
    }

    // Add page to session journey
    const session = dailyStats.sessions[data.sessionId];
    if (!session.pages.includes(data.page)) {
      session.pages.push(data.page);
    }

    // Page views
    dailyStats.pageViews[data.page] = (dailyStats.pageViews[data.page] || 0) + 1;

    // Device stats
    const deviceKey = `${data.device} - ${data.os}`;
    dailyStats.devices[deviceKey] = (dailyStats.devices[deviceKey] || 0) + 1;

    // Browser stats
    dailyStats.browsers[data.browser] = (dailyStats.browsers[data.browser] || 0) + 1;

    // OS stats
    dailyStats.operatingSystems[data.os] = (dailyStats.operatingSystems[data.os] || 0) + 1;

    // Country stats
    dailyStats.countries[data.country] = (dailyStats.countries[data.country] || 0) + 1;

    // City stats
    const cityKey = `${data.city}, ${data.country}`;
    dailyStats.cities[cityKey] = (dailyStats.cities[cityKey] || 0) + 1;

    // Traffic sources
    dailyStats.trafficSources[data.source] = (dailyStats.trafficSources[data.source] || 0) + 1;

    // Referrers
    if (data.referrer && data.referrer !== '') {
      dailyStats.referrers[data.referrer] = (dailyStats.referrers[data.referrer] || 0) + 1;
    }

    // Hourly activity
    const hour = getHourKey();
    dailyStats.hourlyActivity[hour] = (dailyStats.hourlyActivity[hour] || 0) + 1;
  }

  if (type === 'scroll') {
    // Scroll depth tracking
    const depthKey = `${data.page}_${data.depth}`;
    dailyStats.scrollDepths[depthKey] = (dailyStats.scrollDepths[depthKey] || 0) + 1;
  }

  if (type === 'timeOnPage') {
    // Time on page tracking
    if (!dailyStats.timeOnPage[data.page]) {
      dailyStats.timeOnPage[data.page] = { total: 0, count: 0 };
    }
    dailyStats.timeOnPage[data.page].total += data.seconds;
    dailyStats.timeOnPage[data.page].count++;
  }

  if (type === 'click') {
    // Click events
    const clickKey = `${data.page}_${data.element}`;
    dailyStats.clickEvents[clickKey] = (dailyStats.clickEvents[clickKey] || 0) + 1;
  }

  if (type === 'exitLink') {
    // Exit link tracking
    dailyStats.exitLinks[data.url] = (dailyStats.exitLinks[data.url] || 0) + 1;
  }

  if (type === 'search') {
    // Search queries
    dailyStats.searchQueries.push({
      query: data.query,
      timestamp: Date.now(),
      sessionId: data.sessionId
    });
  }

  if (type === 'bounce') {
    dailyStats.bounceCount++;
  }

  // Save with 90 day TTL
  await env.VISITOR_HISTORY.put(dailyKey, JSON.stringify(dailyStats), { expirationTtl: 90 * 24 * 3600 });

  // Track device history separately
  if (eventData.data.deviceId) {
    const deviceKey = `device_${eventData.data.deviceId}`;
    let deviceHistory = await env.VISITOR_HISTORY.get(deviceKey, 'json') || {
      deviceId: eventData.data.deviceId,
      firstSeen: Date.now(),
      lastSeen: Date.now(),
      totalVisits: 0,
      totalPageViews: 0,
      sessions: [],
      favoritePages: {},
      countries: [],
      browsers: []
    };

    deviceHistory.lastSeen = Date.now();
    deviceHistory.totalVisits++;

    if (type === 'heartbeat') {
      deviceHistory.totalPageViews++;
      deviceHistory.favoritePages[data.page] = (deviceHistory.favoritePages[data.page] || 0) + 1;

      if (!deviceHistory.countries.includes(data.country)) {
        deviceHistory.countries.push(data.country);
      }
      if (!deviceHistory.browsers.includes(data.browser)) {
        deviceHistory.browsers.push(data.browser);
      }

      // Track session
      const todaySession = deviceHistory.sessions.find(s => s.date === dateKey);
      if (!todaySession) {
        deviceHistory.sessions.push({
          date: dateKey,
          sessionId: data.sessionId,
          pages: [data.page],
          startTime: Date.now()
        });
      } else {
        if (!todaySession.pages.includes(data.page)) {
          todaySession.pages.push(data.page);
        }
      }
    }

    // Keep only last 100 sessions
    if (deviceHistory.sessions.length > 100) {
      deviceHistory.sessions = deviceHistory.sessions.slice(-100);
    }

    await env.VISITOR_HISTORY.put(deviceKey, JSON.stringify(deviceHistory), { expirationTtl: 365 * 24 * 3600 });
  }
}

// API Handlers
async function handleHeartbeat(request, env) {
  try {
    const body = await request.json();
    const { sessionId, deviceId, page, referrer, scrollDepth, timeOnPage, isNewVisitor, screenSize, language } = body;

    if (!sessionId) {
      return new Response(JSON.stringify({ error: 'Missing sessionId' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    const ua = request.headers.get('User-Agent') || '';
    const { device, browser, os, isMobile } = parseUserAgent(ua);
    const country = request.cf?.country || 'Unknown';
    const city = request.cf?.city || 'Unknown';
    const region = request.cf?.region || 'Unknown';
    const timezone = request.cf?.timezone || 'Unknown';
    const asn = request.cf?.asn || 'Unknown';
    const colo = request.cf?.colo || 'Unknown';

    const { source, medium, campaign } = parseReferrer(referrer, 'noetic-logos.pages.dev');

    const visitorData = {
      sessionId,
      deviceId: deviceId || 'unknown',
      page: page || '/',
      referrer: referrer || '',
      device,
      browser,
      os,
      isMobile,
      country,
      city,
      region,
      timezone,
      asn,
      colo,
      source,
      medium,
      campaign,
      lastSeen: Date.now(),
      screenSize: screenSize || 'unknown',
      language: language || 'unknown',
      isNewVisitor: isNewVisitor || false,
      scrollDepth: scrollDepth || 0,
      timeOnPage: timeOnPage || 0
    };

    // Store in presence (120s TTL - auto cleanup)
    await env.VISITOR_PRESENCE.put(
      `visitor_${sessionId}`,
      JSON.stringify(visitorData),
      { expirationTtl: 120 }
    );

    // Record history
    await recordHistory(env, { type: 'heartbeat', data: visitorData });

    return new Response(JSON.stringify({ success: true, sessionId }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

async function handleEvent(request, env) {
  try {
    const body = await request.json();
    const { type, sessionId, deviceId, ...eventData } = body;

    if (!type || !sessionId) {
      return new Response(JSON.stringify({ error: 'Missing type or sessionId' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    await recordHistory(env, {
      type,
      data: {
        sessionId,
        deviceId,
        ...eventData
      }
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

async function handleGetActive(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== `Bearer ${env.ADMIN_PASSWORD}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }

  try {
    const list = await env.VISITOR_PRESENCE.list({ prefix: 'visitor_' });
    const visitors = [];

    for (const key of list.keys) {
      const data = await env.VISITOR_PRESENCE.get(key.name, 'json');
      if (data) {
        visitors.push(data);
      }
    }

    // Comprehensive stats
    const stats = {
      total: visitors.length,
      devices: {},
      browsers: {},
      operatingSystems: {},
      countries: {},
      cities: {},
      pages: {},
      sources: {},
      screenSizes: {},
      languages: {},
      mobileVsDesktop: { mobile: 0, desktop: 0, tablet: 0 },
      avgScrollDepth: 0,
      avgTimeOnPage: 0,
      visitors: visitors.map(v => ({
        sessionId: v.sessionId.substring(0, 8) + '...',
        deviceId: v.deviceId ? v.deviceId.substring(0, 8) + '...' : 'N/A',
        page: v.page,
        device: v.device,
        browser: v.browser,
        os: v.os,
        country: v.country,
        city: v.city,
        region: v.region,
        timezone: v.timezone,
        source: v.source,
        screenSize: v.screenSize,
        language: v.language,
        scrollDepth: v.scrollDepth,
        timeOnPage: v.timeOnPage,
        lastSeen: v.lastSeen,
        idleTime: Math.round((Date.now() - v.lastSeen) / 1000)
      }))
    };

    let totalScroll = 0;
    let totalTime = 0;

    visitors.forEach(v => {
      // Device breakdown
      const deviceKey = `${v.device} - ${v.os}`;
      stats.devices[deviceKey] = (stats.devices[deviceKey] || 0) + 1;

      // Mobile vs Desktop
      if (v.device === 'Mobile') stats.mobileVsDesktop.mobile++;
      else if (v.device === 'Tablet') stats.mobileVsDesktop.tablet++;
      else stats.mobileVsDesktop.desktop++;

      stats.browsers[v.browser] = (stats.browsers[v.browser] || 0) + 1;
      stats.operatingSystems[v.os] = (stats.operatingSystems[v.os] || 0) + 1;
      stats.countries[v.country] = (stats.countries[v.country] || 0) + 1;

      const cityKey = `${v.city}, ${v.country}`;
      stats.cities[cityKey] = (stats.cities[cityKey] || 0) + 1;

      stats.pages[v.page] = (stats.pages[v.page] || 0) + 1;
      stats.sources[v.source] = (stats.sources[v.source] || 0) + 1;
      stats.screenSizes[v.screenSize] = (stats.screenSizes[v.screenSize] || 0) + 1;
      stats.languages[v.language] = (stats.languages[v.language] || 0) + 1;

      totalScroll += v.scrollDepth || 0;
      totalTime += v.timeOnPage || 0;
    });

    if (visitors.length > 0) {
      stats.avgScrollDepth = Math.round(totalScroll / visitors.length);
      stats.avgTimeOnPage = Math.round(totalTime / visitors.length);
    }

    return new Response(JSON.stringify(stats), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

async function handleGetHistory(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== `Bearer ${env.ADMIN_PASSWORD}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }

  try {
    const url = new URL(request.url);
    const days = parseInt(url.searchParams.get('days') || '7');
    const history = [];

    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateKey = getDateKey(date);
      const dailyKey = `daily_${dateKey}`;

      const data = await env.VISITOR_HISTORY.get(dailyKey, 'json');
      if (data) {
        // Calculate averages
        const avgTimeOnPage = {};
        Object.entries(data.timeOnPage || {}).forEach(([page, stats]) => {
          avgTimeOnPage[page] = Math.round(stats.total / stats.count);
        });

        history.push({
          date: data.date,
          uniqueVisitors: data.uniqueVisitors.length,
          uniqueDevices: data.uniqueDevices?.length || 0,
          totalSessions: data.totalSessions || 0,
          totalPageViews: Object.values(data.pageViews).reduce((a, b) => a + b, 0),
          bounceRate: data.totalSessions > 0 ? Math.round((data.bounceCount / data.totalSessions) * 100) : 0,
          newVsReturning: data.newVsReturning || { new: 0, returning: 0 },
          topPages: Object.entries(data.pageViews)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 15)
            .map(([page, views]) => ({ page, views })),
          devices: data.devices || {},
          browsers: data.browsers || {},
          operatingSystems: data.operatingSystems || {},
          countries: data.countries || {},
          cities: data.cities || {},
          trafficSources: data.trafficSources || {},
          topReferrers: Object.entries(data.referrers || {})
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([url, count]) => ({ url, count })),
          hourlyActivity: data.hourlyActivity || {},
          exitLinks: Object.entries(data.exitLinks || {})
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([url, count]) => ({ url, count })),
          avgTimeOnPage,
          searchQueries: (data.searchQueries || []).slice(-20),
          userJourneys: Object.values(data.sessions || {})
            .filter(s => s.pages.length > 1)
            .slice(0, 10)
            .map(s => ({
              pages: s.pages,
              source: s.source,
              country: s.country
            }))
        });
      }
    }

    return new Response(JSON.stringify({ history }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

async function handleGetDevice(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== `Bearer ${env.ADMIN_PASSWORD}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }

  try {
    const url = new URL(request.url);
    const deviceId = url.searchParams.get('id');

    if (!deviceId) {
      // List all devices
      const list = await env.VISITOR_HISTORY.list({ prefix: 'device_' });
      const devices = [];

      for (const key of list.keys.slice(0, 50)) {
        const data = await env.VISITOR_HISTORY.get(key.name, 'json');
        if (data) {
          devices.push({
            deviceId: data.deviceId.substring(0, 12) + '...',
            firstSeen: data.firstSeen,
            lastSeen: data.lastSeen,
            totalVisits: data.totalVisits,
            totalPageViews: data.totalPageViews,
            totalSessions: data.sessions.length,
            topPages: Object.entries(data.favoritePages)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5)
              .map(([page, count]) => ({ page, count }))
          });
        }
      }

      return new Response(JSON.stringify({ devices }), {
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    // Get specific device
    const deviceKey = `device_${deviceId}`;
    const deviceData = await env.VISITOR_HISTORY.get(deviceKey, 'json');

    if (!deviceData) {
      return new Response(JSON.stringify({ error: 'Device not found' }), {
        status: 404,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify(deviceData), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

async function handleLeave(request, env) {
  try {
    const body = await request.json();
    const { sessionId, timeOnPage, page } = body;

    if (sessionId) {
      await env.VISITOR_PRESENCE.delete(`visitor_${sessionId}`);

      // Record final time on page
      if (timeOnPage && page) {
        await recordHistory(env, {
          type: 'timeOnPage',
          data: { sessionId, page, seconds: timeOnPage }
        });
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

// ========== CHAT SYSTEM ==========

// Helper: Escape HTML to prevent XSS
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Helper: Generate simple ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Chat: Join room with nickname
async function handleChatJoin(request, env) {
  try {
    const body = await request.json();
    const { sessionId, nickname } = body;

    if (!sessionId || !nickname) {
      return new Response(JSON.stringify({ error: 'Missing sessionId or nickname' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    // Validate nickname
    const cleanNickname = nickname.trim().substring(0, CHAT_MAX_NICKNAME_LENGTH);
    if (cleanNickname.length < 1) {
      return new Response(JSON.stringify({ error: 'Invalid nickname' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    // Check if nickname is taken by another session
    const onlineList = await env.CHAT_MESSAGES.list({ prefix: 'chat_user_' });
    for (const key of onlineList.keys) {
      const userData = await env.CHAT_MESSAGES.get(key.name, 'json');
      if (userData && userData.nickname === cleanNickname && userData.sessionId !== sessionId) {
        return new Response(JSON.stringify({ error: 'Nickname already taken' }), {
          status: 409,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
        });
      }
    }

    const userData = {
      sessionId,
      nickname: escapeHtml(cleanNickname),
      joinedAt: Date.now(),
      lastSeen: Date.now()
    };

    await env.CHAT_MESSAGES.put(
      `chat_user_${sessionId}`,
      JSON.stringify(userData),
      { expirationTtl: CHAT_USER_TTL }
    );

    // Add system message
    await addChatMessage(env, {
      type: 'system',
      nickname: 'Sistem',
      message: `${escapeHtml(cleanNickname)} sohbete katıldı`,
      timestamp: Date.now()
    });

    return new Response(JSON.stringify({ success: true, nickname: cleanNickname }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

// Helper: Add message to chat
async function addChatMessage(env, messageData) {
  let messages = await env.CHAT_MESSAGES.get('chat_history', 'json') || [];

  messages.push({
    id: generateId(),
    ...messageData
  });

  // Keep only last N messages
  if (messages.length > CHAT_MAX_MESSAGES) {
    messages = messages.slice(-CHAT_MAX_MESSAGES);
  }

  await env.CHAT_MESSAGES.put('chat_history', JSON.stringify(messages), {
    expirationTtl: CHAT_MESSAGES_TTL
  });
}

// Chat: Send message
async function handleChatSend(request, env) {
  try {
    const body = await request.json();
    const { sessionId, message } = body;

    if (!sessionId || !message) {
      return new Response(JSON.stringify({ error: 'Missing sessionId or message' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    // Check if user is online
    const userData = await env.CHAT_MESSAGES.get(`chat_user_${sessionId}`, 'json');
    if (!userData) {
      return new Response(JSON.stringify({ error: 'Not in chat room. Please join first.' }), {
        status: 403,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    // Validate message
    const cleanMessage = message.trim().substring(0, CHAT_MAX_MESSAGE_LENGTH);
    if (cleanMessage.length < 1) {
      return new Response(JSON.stringify({ error: 'Empty message' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    // Add message
    await addChatMessage(env, {
      type: 'user',
      nickname: userData.nickname,
      message: escapeHtml(cleanMessage),
      timestamp: Date.now()
    });

    // Update user's lastSeen
    userData.lastSeen = Date.now();
    await env.CHAT_MESSAGES.put(
      `chat_user_${sessionId}`,
      JSON.stringify(userData),
      { expirationTtl: CHAT_USER_TTL }
    );

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

// Chat: Get messages
async function handleChatMessages(request, env) {
  try {
    const url = new URL(request.url);
    const since = parseInt(url.searchParams.get('since') || '0');

    const messages = await env.CHAT_MESSAGES.get('chat_history', 'json') || [];

    // Filter messages after 'since' timestamp
    const newMessages = messages.filter(m => m.timestamp > since);

    return new Response(JSON.stringify({ messages: newMessages }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

// Chat: Get online users
async function handleChatOnline(request, env) {
  try {
    const list = await env.CHAT_MESSAGES.list({ prefix: 'chat_user_' });
    const users = [];

    for (const key of list.keys) {
      const userData = await env.CHAT_MESSAGES.get(key.name, 'json');
      if (userData) {
        users.push({
          nickname: userData.nickname,
          joinedAt: userData.joinedAt,
          idleTime: Math.round((Date.now() - userData.lastSeen) / 1000)
        });
      }
    }

    return new Response(JSON.stringify({ users, count: users.length }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

// Chat: Heartbeat (keep user online)
async function handleChatHeartbeat(request, env) {
  try {
    const body = await request.json();
    const { sessionId } = body;

    if (!sessionId) {
      return new Response(JSON.stringify({ error: 'Missing sessionId' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    const userData = await env.CHAT_MESSAGES.get(`chat_user_${sessionId}`, 'json');
    if (!userData) {
      return new Response(JSON.stringify({ error: 'Not in chat room' }), {
        status: 404,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    // Refresh TTL
    userData.lastSeen = Date.now();
    await env.CHAT_MESSAGES.put(
      `chat_user_${sessionId}`,
      JSON.stringify(userData),
      { expirationTtl: CHAT_USER_TTL }
    );

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

// Chat: Leave room
async function handleChatLeave(request, env) {
  try {
    const body = await request.json();
    const { sessionId } = body;

    if (!sessionId) {
      return new Response(JSON.stringify({ error: 'Missing sessionId' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    const userData = await env.CHAT_MESSAGES.get(`chat_user_${sessionId}`, 'json');
    if (userData) {
      // Add leave message
      await addChatMessage(env, {
        type: 'system',
        nickname: 'Sistem',
        message: `${userData.nickname} sohbetten ayrıldı`,
        timestamp: Date.now()
      });

      await env.CHAT_MESSAGES.delete(`chat_user_${sessionId}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
    });
  }
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Routes
    if (path === '/presence/heartbeat' && request.method === 'POST') {
      return handleHeartbeat(request, env);
    }
    if (path === '/presence/event' && request.method === 'POST') {
      return handleEvent(request, env);
    }
    if (path === '/presence/leave' && request.method === 'POST') {
      return handleLeave(request, env);
    }
    if (path === '/presence/active' && request.method === 'GET') {
      return handleGetActive(request, env);
    }
    if (path === '/presence/history' && request.method === 'GET') {
      return handleGetHistory(request, env);
    }
    if (path === '/presence/device' && request.method === 'GET') {
      return handleGetDevice(request, env);
    }
    if (path === '/health') {
      return new Response(JSON.stringify({ status: 'ok', timestamp: Date.now() }), {
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    // Chat routes
    if (path === '/chat/join' && request.method === 'POST') {
      return handleChatJoin(request, env);
    }
    if (path === '/chat/send' && request.method === 'POST') {
      return handleChatSend(request, env);
    }
    if (path === '/chat/messages' && request.method === 'GET') {
      return handleChatMessages(request, env);
    }
    if (path === '/chat/online' && request.method === 'GET') {
      return handleChatOnline(request, env);
    }
    if (path === '/chat/heartbeat' && request.method === 'POST') {
      return handleChatHeartbeat(request, env);
    }
    if (path === '/chat/leave' && request.method === 'POST') {
      return handleChatLeave(request, env);
    }

    return new Response('Not Found', { status: 404, headers: CORS_HEADERS });
  }
};
