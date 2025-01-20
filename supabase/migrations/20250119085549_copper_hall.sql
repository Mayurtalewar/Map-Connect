/*
  # Create profiles table

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `photo_url` (text)
      - `address` (text)
      - `latitude` (double precision)
      - `longitude` (double precision)
      - `contact_info` (text)
      - `interests` (text[])
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `profiles` table
    - Add policies for authenticated users to read all profiles
    - Add policies for authenticated users to manage their own profiles
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  photo_url text NOT NULL,
  address text NOT NULL,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  contact_info text,
  interests text[],
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Allow all authenticated users to read profiles
CREATE POLICY "Anyone can read profiles"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow users to manage their own profiles
CREATE POLICY "Users can insert their own profiles"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profiles"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can delete their own profiles"
  ON profiles
  FOR DELETE
  TO authenticated
  USING (auth.uid() = id);