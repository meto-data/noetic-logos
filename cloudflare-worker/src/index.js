/**
 * Visitor Presence Tracking Worker
 * Real-time analytics with historical data
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://noetic-logos.pages.dev',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

// Helper: Generate session ID
function generateSessionId() {
  return 'v_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// Helper: Parse User-Agent
function parseUserAgent(ua) {
  if (!ua) return { device: 'Unknown', browser: 'Unknown', os: 'Unknown' };

  let device = 'Desktop';
  let browser = 'Unknown';
  let os = 'Unknown';

  // Device detection
  if (/Mobile|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    device = /iPad|Tablet/i.test(ua) ? 'Tablet' : 'Mobile';
  }

  // Browser detection
  if (ua.includes('Firefox/')) browser = 'Firefox';
  else if (ua.includes('Edg/')) browser = 'Edge';
  else if (ua.includes('Chrome/')) browser = 'Chrome';
  else if (ua.includes('Safari/') && !ua.includes('Chrome')) browser = 'Safari';
  else if (ua.includes('Opera') || ua.includes('OPR/')) browser = 'Opera';

  // OS detection
  if (ua.includes('Windows NT 10')) os = 'Windows 10/11';
  else if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac OS X')) os = 'macOS';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
  else if (ua.includes('Linux')) os = 'Linux';

  return { device, browser, os };
}

// Helper: Get today's date key
function getDateKey(date = new Date()) {
  return date.toISOString().split('T')[0];
}

// Helper: Get hour key
function getHourKey(date = new Date()) {
  return date.toISOString().split('T')[0] + '_' + date.getUTCHours().toString().padStart(2, '0');
}

// Store historical data
async function recordHistory(env, visitorData) {
  const dateKey = getDateKey();
  const hourKey = getHourKey();

  // Daily stats
  const dailyKey = `daily_${dateKey}`;
  let dailyStats = await env.VISITOR_HISTORY.get(dailyKey, 'json') || {
    date: dateKey,
    uniqueVisitors: [],
    pageViews: {},
    devices: { Desktop: 0, Mobile: 0, Tablet: 0 },
    browsers: {},
    countries: {},
    hourlyActivity: {}
  };

  // Track unique visitor (by session, not IP for privacy)
  if (!dailyStats.uniqueVisitors.includes(visitorData.sessionId)) {
    dailyStats.uniqueVisitors.push(visitorData.sessionId);
  }

  // Page views
  const page = visitorData.page || '/';
  dailyStats.pageViews[page] = (dailyStats.pageViews[page] || 0) + 1;

  // Device stats
  dailyStats.devices[visitorData.device] = (dailyStats.devices[visitorData.device] || 0) + 1;

  // Browser stats
  dailyStats.browsers[visitorData.browser] = (dailyStats.browsers[visitorData.browser] || 0) + 1;

  // Country stats
  const country = visitorData.country || 'Unknown';
  dailyStats.countries[country] = (dailyStats.countries[country] || 0) + 1;

  // Hourly activity
  const hour = new Date().getUTCHours().toString().padStart(2, '0');
  dailyStats.hourlyActivity[hour] = (dailyStats.hourlyActivity[hour] || 0) + 1;

  // Save with 90 day TTL
  await env.VISITOR_HISTORY.put(dailyKey, JSON.stringify(dailyStats), { expirationTtl: 90 * 24 * 3600 });
}

// API Handlers
async function handleHeartbeat(request, env) {
  try {
    const body = await request.json();
    const { sessionId, page, referrer } = body;

    if (!sessionId) {
      return new Response(JSON.stringify({ error: 'Missing sessionId' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    const ua = request.headers.get('User-Agent') || '';
    const { device, browser, os } = parseUserAgent(ua);
    const country = request.cf?.country || 'Unknown';
    const city = request.cf?.city || 'Unknown';

    const visitorData = {
      sessionId,
      page: page || '/',
      referrer: referrer || '',
      device,
      browser,
      os,
      country,
      city,
      lastSeen: Date.now(),
      ip: request.headers.get('CF-Connecting-IP') || 'Unknown'
    };

    // Store in presence (120s TTL - auto cleanup)
    await env.VISITOR_PRESENCE.put(
      `visitor_${sessionId}`,
      JSON.stringify(visitorData),
      { expirationTtl: 120 }
    );

    // Record history (async, don't wait)
    recordHistory(env, visitorData).catch(console.error);

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

async function handleGetActive(request, env) {
  // Auth check
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

    // Aggregate stats
    const stats = {
      total: visitors.length,
      devices: { Desktop: 0, Mobile: 0, Tablet: 0 },
      browsers: {},
      countries: {},
      pages: {},
      visitors: visitors.map(v => ({
        sessionId: v.sessionId.substring(0, 8) + '...',
        page: v.page,
        device: v.device,
        browser: v.browser,
        os: v.os,
        country: v.country,
        city: v.city,
        lastSeen: v.lastSeen,
        idleTime: Math.round((Date.now() - v.lastSeen) / 1000)
      }))
    };

    visitors.forEach(v => {
      stats.devices[v.device] = (stats.devices[v.device] || 0) + 1;
      stats.browsers[v.browser] = (stats.browsers[v.browser] || 0) + 1;
      stats.countries[v.country] = (stats.countries[v.country] || 0) + 1;
      stats.pages[v.page] = (stats.pages[v.page] || 0) + 1;
    });

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
  // Auth check
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
        history.push({
          date: data.date,
          uniqueVisitors: data.uniqueVisitors.length,
          totalPageViews: Object.values(data.pageViews).reduce((a, b) => a + b, 0),
          topPages: Object.entries(data.pageViews)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([page, views]) => ({ page, views })),
          devices: data.devices,
          browsers: data.browsers,
          countries: data.countries,
          hourlyActivity: data.hourlyActivity
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

async function handleLeave(request, env) {
  try {
    const body = await request.json();
    const { sessionId } = body;

    if (sessionId) {
      await env.VISITOR_PRESENCE.delete(`visitor_${sessionId}`);
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
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Route handling
    if (path === '/presence/heartbeat' && request.method === 'POST') {
      return handleHeartbeat(request, env);
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

    // Health check
    if (path === '/health') {
      return new Response(JSON.stringify({ status: 'ok', timestamp: Date.now() }), {
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
      });
    }

    return new Response('Not Found', { status: 404, headers: CORS_HEADERS });
  }
};
