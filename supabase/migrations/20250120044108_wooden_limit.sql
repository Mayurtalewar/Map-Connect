/*
  # Add More Profile Data

  1. Changes
    - Add 20 new profiles with locations across India
    - Each profile includes:
      - Name
      - Description
      - Photo URL (from Unsplash)
      - Address
      - Latitude/Longitude
      - Contact Info
      - Interests
*/

INSERT INTO profiles (name, description, photo_url, address, latitude, longitude, contact_info, interests)
VALUES
  ('Arjun Patel', 'Software Engineer passionate about AI and machine learning', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d', 'Bandra West, Mumbai', 19.0596, 72.8295, 'arjun.p@email.com', ARRAY['AI', 'Machine Learning', 'Photography']),
  ('Priya Sharma', 'UX Designer creating intuitive digital experiences', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', 'Indiranagar, Bangalore', 12.9784, 77.6408, 'priya.designs@email.com', ARRAY['UX Design', 'Art', 'Travel']),
  ('Raj Malhotra', 'Startup Founder revolutionizing fintech', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e', 'Connaught Place, Delhi', 28.6329, 77.2195, 'raj.m@email.com', ARRAY['Fintech', 'Entrepreneurship', 'Innovation']),
  ('Ananya Reddy', 'Environmental Scientist working on sustainability', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80', 'Jubilee Hills, Hyderabad', 17.4319, 78.4095, 'ananya.r@email.com', ARRAY['Environment', 'Sustainability', 'Research']),
  ('Vikram Singh', 'Chef specializing in fusion cuisine', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', 'Park Street, Kolkata', 22.5515, 88.3525, 'chef.vikram@email.com', ARRAY['Cooking', 'Food Photography', 'Travel']),
  ('Maya Iyer', 'Digital Marketing Specialist', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb', 'Koramangala, Bangalore', 12.9279, 77.6271, 'maya.i@email.com', ARRAY['Marketing', 'Social Media', 'Content Creation']),
  ('Kabir Khanna', 'Architect designing sustainable spaces', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', 'Civil Lines, Delhi', 28.6814, 77.2226, 'kabir.arch@email.com', ARRAY['Architecture', 'Sustainability', 'Design']),
  ('Zara Ahmed', 'Fashion Designer blending traditional with modern', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce', 'Juhu, Mumbai', 19.0883, 72.8264, 'zara.fashion@email.com', ARRAY['Fashion', 'Art', 'Photography']),
  ('Dev Kapoor', 'Product Manager at a leading tech company', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7', 'HSR Layout, Bangalore', 12.9116, 77.6474, 'dev.k@email.com', ARRAY['Product Management', 'Technology', 'Innovation']),
  ('Riya Menon', 'Healthcare Professional specializing in telemedicine', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2', 'Alwarpet, Chennai', 13.0359, 80.2496, 'dr.riya@email.com', ARRAY['Healthcare', 'Technology', 'Wellness']),
  ('Aditya Verma', 'Data Scientist working on ML models', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d', 'Salt Lake, Kolkata', 22.5806, 88.4089, 'aditya.v@email.com', ARRAY['Data Science', 'AI', 'Research']),
  ('Neha Gupta', 'Content Creator and Social Media Influencer', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', 'Powai, Mumbai', 19.1176, 72.9060, 'neha.social@email.com', ARRAY['Content Creation', 'Social Media', 'Photography']),
  ('Rohan Mehta', 'Renewable Energy Consultant', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e', 'Electronic City, Bangalore', 12.8399, 77.6770, 'rohan.m@email.com', ARRAY['Renewable Energy', 'Sustainability', 'Technology']),
  ('Sanya Joshi', 'Yoga Instructor and Wellness Coach', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80', 'Banjara Hills, Hyderabad', 17.4156, 78.4347, 'sanya.wellness@email.com', ARRAY['Yoga', 'Wellness', 'Meditation']),
  ('Karan Shah', 'Investment Banker', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', 'Worli, Mumbai', 19.0178, 72.8478, 'karan.finance@email.com', ARRAY['Finance', 'Investment', 'Economics']),
  ('Ishita Roy', 'Biotechnology Researcher', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb', 'Adyar, Chennai', 13.0012, 80.2565, 'ishita.r@email.com', ARRAY['Biotechnology', 'Research', 'Innovation']),
  ('Nikhil Tandon', 'Music Producer and DJ', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', 'Hauz Khas, Delhi', 28.5494, 77.2001, 'nikhil.music@email.com', ARRAY['Music', 'Production', 'Events']),
  ('Tanya Desai', 'Educational Technology Entrepreneur', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce', 'Aundh, Pune', 18.5589, 73.8074, 'tanya.ed@email.com', ARRAY['Education', 'Technology', 'Entrepreneurship']),
  ('Rahul Sinha', 'Cybersecurity Expert', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7', 'Whitefield, Bangalore', 12.9698, 77.7499, 'rahul.security@email.com', ARRAY['Cybersecurity', 'Technology', 'Privacy']),
  ('Meera Nair', 'Documentary Filmmaker', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2', 'Fort Kochi, Kochi', 9.9658, 76.2394, 'meera.films@email.com', ARRAY['Filmmaking', 'Storytelling', 'Photography']);