/**
 * Noetic Presence & Chat Worker v3.0
 * Using D1 Database (100K writes/day vs KV's 1K)
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://noetic-logos.pages.dev',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

// Rate limiting: track last message time per session
const rateLimitMap = new Map();
const RATE_LIMIT_MS = 1000; // 1 second between messages

// Clean old rate limit entries (called on each request)
function cleanRateLimitMap() {
  const now = Date.now();
  for (const [key, time] of rateLimitMap.entries()) {
    if (now - time > 60000) {
      rateLimitMap.delete(key);
    }
  }
}

// Helper: Parse User-Agent
function parseUserAgent(ua) {
  if (!ua) return { device: 'Desktop', browser: 'Unknown', os: 'Unknown', isMobile: 0 };

  let device = 'Desktop';
  let browser = 'Unknown';
  let os = 'Unknown';
  let isMobile = 0;

  if (/Mobile|Android|iPhone|iPad|iPod/i.test(ua)) {
    isMobile = 1;
    device = /iPad|Tablet/i.test(ua) ? 'Tablet' : 'Mobile';
  }

  if (ua.includes('Firefox/')) browser = 'Firefox';
  else if (ua.includes('Edg/')) browser = 'Edge';
  else if (ua.includes('Chrome/')) browser = 'Chrome';
  else if (ua.includes('Safari/') && !ua.includes('Chrome')) browser = 'Safari';

  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac OS X')) os = 'macOS';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
  else if (ua.includes('Linux')) os = 'Linux';

  return { device, browser, os, isMobile };
}

// Helper: Parse referrer
function parseReferrer(referrer) {
  if (!referrer) return { source: 'Direct', medium: 'none' };

  try {
    const host = new URL(referrer).hostname.toLowerCase();

    if (host.includes('google.')) return { source: 'Google', medium: 'search' };
    if (host.includes('facebook.com') || host.includes('fb.com')) return { source: 'Facebook', medium: 'social' };
    if (host.includes('twitter.com') || host.includes('t.co') || host.includes('x.com')) return { source: 'Twitter', medium: 'social' };
    if (host.includes('linkedin.com')) return { source: 'LinkedIn', medium: 'social' };
    if (host.includes('reddit.com')) return { source: 'Reddit', medium: 'social' };
    if (host.includes('youtube.com')) return { source: 'YouTube', medium: 'social' };
    if (host.includes('instagram.com')) return { source: 'Instagram', medium: 'social' };
    if (host.includes('bing.com')) return { source: 'Bing', medium: 'search' };
    if (host.includes('whatsapp.com') || host.includes('wa.me')) return { source: 'WhatsApp', medium: 'messaging' };
    if (host.includes('telegram.org') || host.includes('t.me')) return { source: 'Telegram', medium: 'messaging' };

    return { source: host, medium: 'referral' };
  } catch {
    return { source: 'Unknown', medium: 'unknown' };
  }
}

// ========== PRESENCE HANDLERS ==========

async function handleHeartbeat(request, env) {
  try {
    const body = await request.json();
    const { sessionId, deviceId, page, referrer, scrollDepth, timeOnPage, screenSize, language } = body;

    if (!sessionId) {
      return jsonResponse({ error: 'Missing sessionId' }, 400);
    }

    const ua = request.headers.get('User-Agent') || '';
    const { device, browser, os, isMobile } = parseUserAgent(ua);
    const country = request.cf?.country || 'Unknown';
    const city = request.cf?.city || 'Unknown';
    const region = request.cf?.region || 'Unknown';
    const timezone = request.cf?.timezone || 'Unknown';
    const { source, medium } = parseReferrer(referrer);
    const now = Date.now();

    // Upsert visitor
    await env.DB.prepare(`
      INSERT INTO visitors (session_id, device_id, page, referrer, device, browser, os, is_mobile, country, city, region, timezone, source, medium, screen_size, language, scroll_depth, time_on_page, last_seen, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(session_id) DO UPDATE SET
        page = excluded.page,
        scroll_depth = excluded.scroll_depth,
        time_on_page = excluded.time_on_page,
        last_seen = excluded.last_seen
    `).bind(
      sessionId, deviceId || '', page || '/', referrer || '', device, browser, os, isMobile,
      country, city, region, timezone, source, medium, screenSize || '', language || '',
      scrollDepth || 0, timeOnPage || 0, now, now
    ).run();

    // Log page view (simple insert, very efficient)
    await env.DB.prepare(`
      INSERT INTO page_views (session_id, device_id, page, country, city, source, browser, os, device, timestamp)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(sessionId, deviceId || '', page || '/', country, city, source, browser, os, device, now).run();

    return jsonResponse({ success: true });
  } catch (e) {
    return jsonResponse({ error: e.message }, 500);
  }
}

async function handleLeave(request, env) {
  try {
    const { sessionId } = await request.json();
    if (sessionId) {
      await env.DB.prepare('DELETE FROM visitors WHERE session_id = ?').bind(sessionId).run();
    }
    return jsonResponse({ success: true });
  } catch (e) {
    return jsonResponse({ error: e.message }, 500);
  }
}

async function handleGetActive(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== `Bearer ${env.ADMIN_PASSWORD}`) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }

  try {
    // Get visitors active in last 2 minutes
    const cutoff = Date.now() - 120000;
    const result = await env.DB.prepare(`
      SELECT * FROM visitors WHERE last_seen > ? ORDER BY last_seen DESC
    `).bind(cutoff).all();

    const visitors = result.results || [];

    const stats = {
      total: visitors.length,
      visitors: visitors.map(v => ({
        sessionId: v.session_id.substring(0, 8) + '...',
        page: v.page,
        device: v.device,
        browser: v.browser,
        os: v.os,
        country: v.country,
        city: v.city,
        source: v.source,
        idleTime: Math.round((Date.now() - v.last_seen) / 1000)
      }))
    };

    return jsonResponse(stats);
  } catch (e) {
    return jsonResponse({ error: e.message }, 500);
  }
}

async function handleGetHistory(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== `Bearer ${env.ADMIN_PASSWORD}`) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }

  try {
    const url = new URL(request.url);
    const days = parseInt(url.searchParams.get('days') || '7');

    // Get stats for last N days
    const history = [];
    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayStart = new Date(dateStr).getTime();
      const dayEnd = dayStart + 86400000;

      const stats = await env.DB.prepare(`
        SELECT
          COUNT(DISTINCT session_id) as unique_visitors,
          COUNT(*) as total_page_views,
          page, country, source, browser, device
        FROM page_views
        WHERE timestamp >= ? AND timestamp < ?
        GROUP BY page, country, source, browser, device
      `).bind(dayStart, dayEnd).all();

      const pageViews = {};
      const countries = {};
      const sources = {};
      const browsers = {};
      const devices = {};
      let totalViews = 0;
      const uniqueSessions = new Set();

      (stats.results || []).forEach(row => {
        pageViews[row.page] = (pageViews[row.page] || 0) + row.total_page_views;
        countries[row.country] = (countries[row.country] || 0) + row.total_page_views;
        sources[row.source] = (sources[row.source] || 0) + row.total_page_views;
        browsers[row.browser] = (browsers[row.browser] || 0) + row.total_page_views;
        devices[row.device] = (devices[row.device] || 0) + row.total_page_views;
        totalViews += row.total_page_views;
      });

      // Get unique visitors count
      const uniqueResult = await env.DB.prepare(`
        SELECT COUNT(DISTINCT session_id) as count FROM page_views WHERE timestamp >= ? AND timestamp < ?
      `).bind(dayStart, dayEnd).first();

      history.push({
        date: dateStr,
        uniqueVisitors: uniqueResult?.count || 0,
        totalPageViews: totalViews,
        topPages: Object.entries(pageViews).sort((a, b) => b[1] - a[1]).slice(0, 10),
        countries,
        sources,
        browsers,
        devices
      });
    }

    return jsonResponse({ history });
  } catch (e) {
    return jsonResponse({ error: e.message }, 500);
  }
}

// ========== CHAT HANDLERS ==========

// XSS Protection: Sanitize input
function sanitizeInput(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/`/g, '&#96;')
    .replace(/\\/g, '&#92;');
}

async function handleChatJoin(request, env) {
  try {
    const body = await request.json();

    // Validate input types
    if (typeof body !== 'object' || body === null) {
      return jsonResponse({ error: 'Invalid request' }, 400);
    }

    const { sessionId, nickname } = body;

    if (!sessionId || !nickname || typeof sessionId !== 'string' || typeof nickname !== 'string') {
      return jsonResponse({ error: 'Missing sessionId or nickname' }, 400);
    }

    // Validate session ID format
    if (!/^chat_[a-z0-9]{10,30}$/i.test(sessionId)) {
      return jsonResponse({ error: 'Invalid session format' }, 400);
    }

    // Sanitize and validate nickname
    const trimmedNick = nickname.trim().substring(0, 20);

    // Block dangerous patterns BEFORE sanitization
    if (/[<>'"\\`\x00-\x1f]/.test(trimmedNick)) {
      return jsonResponse({ error: 'Geçersiz karakterler' }, 400);
    }

    // Only allow alphanumeric, Turkish chars, spaces, underscores
    if (!/^[\w\sığüşöçİĞÜŞÖÇ]+$/u.test(trimmedNick)) {
      return jsonResponse({ error: 'Sadece harf, rakam ve alt çizgi kullanın' }, 400);
    }

    const cleanNickname = sanitizeInput(trimmedNick);
    if (cleanNickname.length < 1 || cleanNickname.length > 20) {
      return jsonResponse({ error: 'Takma ad 1-20 karakter olmalı' }, 400);
    }

    // Check if nickname taken
    const existing = await env.DB.prepare(
      'SELECT session_id FROM chat_users WHERE nickname = ? AND session_id != ?'
    ).bind(cleanNickname, sessionId).first();

    if (existing) {
      return jsonResponse({ error: 'Nickname already taken' }, 409);
    }

    const now = Date.now();

    // Check if user already in chat (page refresh case)
    const existingUser = await env.DB.prepare(
      'SELECT nickname FROM chat_users WHERE session_id = ?'
    ).bind(sessionId).first();

    const isReconnect = existingUser !== null;

    // Upsert user
    await env.DB.prepare(`
      INSERT INTO chat_users (session_id, nickname, joined_at, last_seen)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(session_id) DO UPDATE SET nickname = excluded.nickname, last_seen = excluded.last_seen
    `).bind(sessionId, cleanNickname, now, now).run();

    return jsonResponse({ success: true, nickname: cleanNickname });
  } catch (e) {
    if (e.message.includes('UNIQUE constraint failed')) {
      return jsonResponse({ error: 'Nickname already taken' }, 409);
    }
    return jsonResponse({ error: e.message }, 500);
  }
}

async function handleChatSend(request, env) {
  try {
    const body = await request.json();

    // Validate input types (prevent prototype pollution)
    if (typeof body !== 'object' || body === null) {
      return jsonResponse({ error: 'Invalid request body' }, 400);
    }

    const { sessionId, message } = body;

    if (!sessionId || !message || typeof sessionId !== 'string' || typeof message !== 'string') {
      return jsonResponse({ error: 'Missing or invalid sessionId/message' }, 400);
    }

    // Validate session ID format (prevent injection)
    if (!/^chat_[a-z0-9]{10,30}$/i.test(sessionId)) {
      return jsonResponse({ error: 'Invalid session format' }, 400);
    }

    // RATE LIMITING: 1 message per second
    const lastMessageTime = rateLimitMap.get(sessionId) || 0;
    const now = Date.now();
    if (now - lastMessageTime < RATE_LIMIT_MS) {
      const waitTime = Math.ceil((RATE_LIMIT_MS - (now - lastMessageTime)) / 1000);
      return jsonResponse({ error: `Çok hızlı! ${waitTime} saniye bekleyin.` }, 429);
    }

    // Check if user online
    const user = await env.DB.prepare(
      'SELECT nickname FROM chat_users WHERE session_id = ?'
    ).bind(sessionId).first();

    if (!user) {
      return jsonResponse({ error: 'Not in chat room' }, 403);
    }

    const cleanMessage = sanitizeInput(message.trim().substring(0, 500));
    if (cleanMessage.length < 1) {
      return jsonResponse({ error: 'Empty message' }, 400);
    }

    // Update rate limit
    rateLimitMap.set(sessionId, now);

    // Insert message (sanitized) - SQL Injection safe via prepared statement
    await env.DB.prepare(
      'INSERT INTO chat_messages (type, nickname, message, timestamp) VALUES (?, ?, ?, ?)'
    ).bind('user', user.nickname, cleanMessage, now).run();

    // Update last seen
    await env.DB.prepare(
      'UPDATE chat_users SET last_seen = ? WHERE session_id = ?'
    ).bind(now, sessionId).run();

    return jsonResponse({ success: true });
  } catch (e) {
    return jsonResponse({ error: 'Server error' }, 500);
  }
}

async function handleChatMessages(request, env) {
  try {
    const url = new URL(request.url);
    const since = parseInt(url.searchParams.get('since') || '0');

    // Get messages after timestamp, limit 100
    const result = await env.DB.prepare(`
      SELECT id, type, nickname, message, timestamp
      FROM chat_messages
      WHERE timestamp > ?
      ORDER BY timestamp ASC
      LIMIT 100
    `).bind(since).all();

    return jsonResponse({ messages: result.results || [] });
  } catch (e) {
    return jsonResponse({ error: e.message }, 500);
  }
}

async function handleChatOnline(request, env) {
  try {
    // Users active in last 60 seconds
    const cutoff = Date.now() - 60000;
    const result = await env.DB.prepare(`
      SELECT nickname, joined_at, last_seen FROM chat_users WHERE last_seen > ?
    `).bind(cutoff).all();

    const users = (result.results || []).map(u => ({
      nickname: u.nickname,
      joinedAt: u.joined_at,
      idleTime: Math.round((Date.now() - u.last_seen) / 1000)
    }));

    return jsonResponse({ users, count: users.length });
  } catch (e) {
    return jsonResponse({ error: e.message }, 500);
  }
}

async function handleChatHeartbeat(request, env) {
  try {
    const body = await request.json();

    if (typeof body !== 'object' || body === null) {
      return jsonResponse({ error: 'Invalid request' }, 400);
    }

    const { sessionId } = body;

    if (!sessionId || typeof sessionId !== 'string') {
      return jsonResponse({ error: 'Missing sessionId' }, 400);
    }

    // Validate session ID format
    if (!/^chat_[a-z0-9]{10,30}$/i.test(sessionId)) {
      return jsonResponse({ error: 'Invalid session format' }, 400);
    }

    const result = await env.DB.prepare(
      'UPDATE chat_users SET last_seen = ? WHERE session_id = ?'
    ).bind(Date.now(), sessionId).run();

    if (result.meta.changes === 0) {
      return jsonResponse({ error: 'Not in chat room' }, 404);
    }

    return jsonResponse({ success: true });
  } catch (e) {
    return jsonResponse({ error: 'Server error' }, 500);
  }
}

async function handleChatDelete(request, env) {
  try {
    const body = await request.json();

    if (typeof body !== 'object' || body === null) {
      return jsonResponse({ error: 'Invalid request' }, 400);
    }

    const { sessionId, messageId } = body;

    if (!sessionId || !messageId || typeof sessionId !== 'string' || typeof messageId !== 'number') {
      return jsonResponse({ error: 'Missing sessionId or messageId' }, 400);
    }

    // Validate session ID format
    if (!/^chat_[a-z0-9]{10,30}$/i.test(sessionId)) {
      return jsonResponse({ error: 'Invalid session format' }, 400);
    }

    // Get user's nickname
    const user = await env.DB.prepare(
      'SELECT nickname FROM chat_users WHERE session_id = ?'
    ).bind(sessionId).first();

    if (!user) {
      return jsonResponse({ error: 'Not in chat room' }, 403);
    }

    // Check if message belongs to user (IDOR protection)
    const message = await env.DB.prepare(
      'SELECT nickname FROM chat_messages WHERE id = ? AND type = ?'
    ).bind(messageId, 'user').first();

    if (!message) {
      return jsonResponse({ error: 'Mesaj bulunamadı' }, 404);
    }

    if (message.nickname !== user.nickname) {
      return jsonResponse({ error: 'Sadece kendi mesajlarınızı silebilirsiniz' }, 403);
    }

    // Delete the message
    await env.DB.prepare('DELETE FROM chat_messages WHERE id = ?').bind(messageId).run();

    return jsonResponse({ success: true });
  } catch (e) {
    return jsonResponse({ error: 'Server error' }, 500);
  }
}

async function handleChatLeave(request, env) {
  try {
    const body = await request.json();

    if (typeof body !== 'object' || body === null) {
      return jsonResponse({ error: 'Invalid request' }, 400);
    }

    const { sessionId } = body;

    if (!sessionId || typeof sessionId !== 'string') {
      return jsonResponse({ error: 'Missing sessionId' }, 400);
    }

    // Validate session ID format
    if (!/^chat_[a-z0-9]{10,30}$/i.test(sessionId)) {
      return jsonResponse({ error: 'Invalid session format' }, 400);
    }

    const user = await env.DB.prepare(
      'SELECT nickname FROM chat_users WHERE session_id = ?'
    ).bind(sessionId).first();

    if (user) {
      await env.DB.prepare('DELETE FROM chat_users WHERE session_id = ?').bind(sessionId).run();

      // Clean rate limit for this session
      rateLimitMap.delete(sessionId);
    }

    return jsonResponse({ success: true });
  } catch (e) {
    return jsonResponse({ error: 'Server error' }, 500);
  }
}

// Helper: JSON Response
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
  });
}

// Main router
export default {
  async fetch(request, env, ctx) {
    // Clean rate limit map periodically
    cleanRateLimitMap();

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Presence routes
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
    if (path === '/chat/delete' && request.method === 'POST') {
      return handleChatDelete(request, env);
    }

    // Health check
    if (path === '/health') {
      return jsonResponse({ status: 'ok', timestamp: Date.now(), version: '3.0-d1' });
    }

    return new Response('Not Found', { status: 404, headers: CORS_HEADERS });
  }
};
