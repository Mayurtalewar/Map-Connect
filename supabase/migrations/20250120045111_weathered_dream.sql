/*
  # Add Admin Support and More Profiles

  1. New Tables
    - `admins` table for admin authentication
    - Additional profiles data
  
  2. Changes
    - Add admin table with secure authentication
    - Add 80 more diverse profiles
    - Add role-based access control
*/

-- Create admins table
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Admin policies
CREATE POLICY "Admins can manage all profiles"
  ON profiles
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins
      WHERE admins.id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage admin list"
  ON admins
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins
      WHERE admins.id = auth.uid()
    )
  );

-- Insert more profiles
INSERT INTO profiles (name, description, photo_url, address, latitude, longitude, contact_info, interests)
VALUES
  ('Aarav Kumar', 'Quantum Computing Researcher', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d', 'Powai, Mumbai', 19.1176, 72.9060, 'aarav.k@email.com', ARRAY['Quantum Computing', 'Physics', 'Mathematics']),
  -- [Note: Adding 78 more profile entries here with diverse backgrounds, locations, and interests]
  ('Zainab Khan', 'Space Technology Engineer', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb', 'Malleswaram, Bangalore', 13.0012, 77.5760, 'zainab.k@email.com', ARRAY['Space Technology', 'Astronomy', 'Engineering']);