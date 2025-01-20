import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Profile } from '../types';
import { supabase } from '../lib/supabase';
import { Button } from './ui/button';
import { toast } from 'react-hot-toast';

export function AdminDashboard() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleSave = async (profile: Profile) => {
    try {
      if (isAddingNew) {
        const { data, error } = await supabase
          .from('profiles')
          .insert([profile])
          .select()
          .single();

        if (error) throw error;
        setProfiles([...profiles, data]);
        toast.success('Profile added successfully');
      } else {
        const { error } = await supabase
          .from('profiles')
          .update(profile)
          .eq('id', profile.id);

        if (error) throw error;
        setProfiles(profiles.map(p => p.id === profile.id ? profile : p));
        toast.success('Profile updated successfully');
      }
      setEditingProfile(null);
      setIsAddingNew(false);
    } catch (error) {
      toast.error('Failed to save profile');
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setProfiles(profiles.filter(p => p.id !== id));
      toast.success('Profile deleted successfully');
    } catch (error) {
      toast.error('Failed to delete profile');
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h2>
          <Button
            onClick={() => setIsAddingNew(true)}
            className="gap-2"
          >
            <Plus size={18} />
            Add New Profile
          </Button>
        </div>

        {/* Profile Management UI */}
        <div className="grid gap-6">
          {profiles.map(profile => (
            <motion.div
              key={profile.id}
              layout
              className="bg-card p-6 rounded-lg border border-border"
            >
              {editingProfile?.id === profile.id ? (
                <ProfileForm
                  profile={profile}
                  onSave={handleSave}
                  onCancel={() => setEditingProfile(null)}
                />
              ) : (
                <ProfileView
                  profile={profile}
                  onEdit={() => setEditingProfile(profile)}
                  onDelete={() => handleDelete(profile.id)}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Additional components for form handling and profile view
function ProfileForm({ profile, onSave, onCancel }: {
  profile: Profile;
  onSave: (profile: Profile) => void;
  onCancel: () => void;
}) {
  // Form implementation
  return (
    <div className="space-y-4">
      {/* Form fields */}
      <div className="flex justify-end gap-2">
        <Button onClick={() => onSave(profile)} className="gap-2">
          <Save size={18} />
          Save
        </Button>
        <Button onClick={onCancel} variant="secondary" className="gap-2">
          <X size={18} />
          Cancel
        </Button>
      </div>
    </div>
  );
}

function ProfileView({ profile, onEdit, onDelete }: {
  profile: Profile;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold">{profile.name}</h3>
        <p className="text-muted-foreground">{profile.description}</p>
      </div>
      <div className="flex gap-2">
        <Button onClick={onEdit} variant="secondary" size="icon">
          <Edit size={18} />
        </Button>
        <Button onClick={onDelete} variant="destructive" size="icon">
          <Trash2 size={18} />
        </Button>
      </div>
    </div>
  );
}