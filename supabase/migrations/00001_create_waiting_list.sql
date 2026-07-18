-- Create waiting_list table
CREATE TABLE IF NOT EXISTS waiting_list (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  kota TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waiting_list ENABLE ROW LEVEL SECURITY;

-- Create policy: only insert allowed for public
CREATE POLICY "Anyone can insert waiting list entries"
  ON waiting_list
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy: only authenticated users can view
CREATE POLICY "Only authenticated users can view waiting list"
  ON waiting_list
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_waiting_list_created_at ON waiting_list (created_at DESC);

-- Create blog_posts table for future CMS
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category TEXT,
  author TEXT,
  published_at TIMESTAMPTZ,
  read_time INT,
  tags TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create mountains table for future CMS
CREATE TABLE IF NOT EXISTS mountains (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  location TEXT,
  elevation INT,
  difficulty TEXT,
  description TEXT,
  image_url TEXT,
  latitude FLOAT8,
  longitude FLOAT8,
  estimated_time TEXT,
  best_season TEXT,
  popularity INT DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE mountains ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view mountains"
  ON mountains
  FOR SELECT
  TO anon, authenticated
  USING (true);
