import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Profile } from '../types';

interface MapProps {
  profile: Profile;
}

export function Map({ profile }: MapProps) {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden">
      <MapContainer
        center={[profile.latitude, profile.longitude]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[profile.latitude, profile.longitude]}>
          <Popup>
            <div>
              <h3 className="font-semibold">{profile.name}</h3>
              <p>{profile.address}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}