import { X } from 'lucide-react';
import { Profile } from '../types';
import { Map } from './Map';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface ProfileDetailsProps {
  profile: Profile;
  showMap: boolean;
  onClose: () => void;
}

export function ProfileDetails({ profile, showMap, onClose }: ProfileDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-lg"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-card-foreground">{profile.name}</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={24} />
            </Button>
          </div>
          
          <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
            <img
              src={profile.photo_url}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">About</h3>
              <p className="text-muted-foreground">{profile.description}</p>
            </div>
            
            {profile.interests && (
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {profile.contact_info && (
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Contact Information</h3>
                <p className="text-muted-foreground">{profile.contact_info}</p>
              </div>
            )}
            
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Location</h3>
              <p className="text-muted-foreground mb-4">{profile.address}</p>
              <div className="h-[400px] rounded-lg overflow-hidden border border-border">
                <Map profile={profile} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}