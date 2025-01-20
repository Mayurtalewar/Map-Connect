/*
  # Allow public read access to profiles
  
  1. Changes
    - Add policy to allow public (unauthenticated) access to read profiles
  
  2. Security
    - Maintains existing authenticated user policies
    - Only adds SELECT permission for public access
*/

-- Drop the existing read policy
DROP POLICY IF EXISTS "Anyone can read profiles" ON profiles;

-- Create new policy for public read access
CREATE POLICY "Anyone can read profiles"
  ON profiles
  FOR SELECT
  USING (true);