import { motion } from "framer-motion";
import { MapPin, Info } from 'lucide-react';
import { Profile } from '../types';
import { Button } from './ui/button';

interface ProfileCardProps {
  profile: Profile;
  onShowMap: (profile: Profile) => void;
  onShowDetails: (profile: Profile) => void;
  index: number;
}

export function ProfileCard({ profile, onShowMap, onShowDetails, index }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group bg-card rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={profile.photo_url}
          alt={profile.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-card-foreground">{profile.name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{profile.description}</p>
        <div className="flex justify-between gap-2">
          <Button
            onClick={() => onShowMap(profile)}
            className="flex-1 gap-2"
            variant="default"
          >
            <MapPin size={18} />
            View Map
          </Button>
          <Button
            onClick={() => onShowDetails(profile)}
            className="flex-1 gap-2"
            variant="secondary"
          >
            <Info size={18} />
            Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}