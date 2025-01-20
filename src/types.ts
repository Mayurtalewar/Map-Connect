export interface Profile {
  id: string;
  name: string;
  description: string;
  photo_url: string;
  address: string;
  latitude: number;
  longitude: number;
  contact_info?: string;
  interests?: string[];
  created_at: string;
}

export interface Admin {
  id: string;
  email: string;
  created_at: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface FilterOptions {
  city?: string;
  interests?: string[];
  searchQuery?: string;
}