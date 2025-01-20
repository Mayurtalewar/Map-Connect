import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from './lib/supabase';
import { Profile, FilterOptions } from './types';
import { ProfileCard } from './components/ProfileCard';
import { ProfileDetails } from './components/ProfileDetails';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { Map } from './components/Map';
import { ThemeToggle } from './components/ThemeToggle';
import { AdminDashboard } from './components/AdminDashboard';

function App() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({});
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdmin();
    fetchProfiles();
  }, []);

  async function checkAdmin() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase
        .from('admins')
        .select('id')
        .eq('id', user.id)
        .single();
      setIsAdmin(!!data);
    }
  }

  async function fetchProfiles() {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProfiles(data || []);
    } catch (error) {
      toast.error('Failed to load profiles');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCity = !filterOptions.city || profile.address.includes(filterOptions.city);
    const matchesInterests = !filterOptions.interests?.length ||
      profile.interests?.some(interest => filterOptions.interests?.includes(interest));

    return matchesSearch && matchesCity && matchesInterests;
  });

  const cities = Array.from(new Set(profiles.map(p => p.address.split(',')[1].trim())));
  const interests = Array.from(new Set(profiles.flatMap(p => p.interests || [])));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" />
      
      <header className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              Map Connect
            </motion.h1>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              {isAdmin && (
                <Button onClick={() => setShowAdminDashboard(true)}>
                  Admin Dashboard
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterBar
            options={filterOptions}
            onFilterChange={setFilterOptions}
            cities={cities}
            interests={interests}
          />
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="animate-spin text-primary" size={48} />
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProfiles.map((profile, index) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  index={index}
                  onShowMap={(profile) => {
                    setSelectedProfile(profile);
                    setShowMap(true);
                  }}
                  onShowDetails={(profile) => {
                    setSelectedProfile(profile);
                    setShowMap(false);
                  }}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedProfile && (
            <ProfileDetails
              profile={selectedProfile}
              showMap={showMap}
              onClose={() => {
                setSelectedProfile(null);
                setShowMap(false);
              }}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;