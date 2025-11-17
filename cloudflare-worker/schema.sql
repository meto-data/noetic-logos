-- Noetic Analytics & Chat Database Schema

-- Active visitors (auto-cleanup via application logic)
CREATE TABLE IF NOT EXISTS visitors (
  session_id TEXT PRIMARY KEY,
  device_id TEXT,
  page TEXT,
  referrer TEXT,
  device TEXT,
  browser TEXT,
  os TEXT,
  is_mobile INTEGER,
  country TEXT,
  city TEXT,
  region TEXT,
  timezone TEXT,
  source TEXT,
  medium TEXT,
  screen_size TEXT,
  language TEXT,
  scroll_depth INTEGER DEFAULT 0,
  time_on_page INTEGER DEFAULT 0,
  last_seen INTEGER,
  created_at INTEGER
);

-- Page views log
CREATE TABLE IF NOT EXISTS page_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT,
  device_id TEXT,
  page TEXT,
  country TEXT,
  city TEXT,
  source TEXT,
  browser TEXT,
  os TEXT,
  device TEXT,
  timestamp INTEGER
);

-- Chat users (online presence)
CREATE TABLE IF NOT EXISTS chat_users (
  session_id TEXT PRIMARY KEY,
  nickname TEXT UNIQUE,
  joined_at INTEGER,
  last_seen INTEGER
);

-- Chat messages
CREATE TABLE IF NOT EXISTS chat_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT DEFAULT 'user',
  nickname TEXT,
  message TEXT,
  timestamp INTEGER
);

-- Daily stats (aggregated)
CREATE TABLE IF NOT EXISTS daily_stats (
  date TEXT PRIMARY KEY,
  unique_visitors INTEGER DEFAULT 0,
  total_page_views INTEGER DEFAULT 0,
  total_sessions INTEGER DEFAULT 0
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_visitors_last_seen ON visitors(last_seen);
CREATE INDEX IF NOT EXISTS idx_page_views_timestamp ON page_views(timestamp);
CREATE INDEX IF NOT EXISTS idx_chat_users_last_seen ON chat_users(last_seen);
CREATE INDEX IF NOT EXISTS idx_chat_messages_timestamp ON chat_messages(timestamp);
