import React from 'react';
import { Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { FilterOptions } from '../types';

interface FilterBarProps {
  options: FilterOptions;
  onFilterChange: (options: FilterOptions) => void;
  cities: string[];
  interests: string[];
}

export function FilterBar({ options, onFilterChange, cities, interests }: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 mb-6"
    >
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-primary" />
          <span className="font-medium">Filters:</span>
        </div>
        
        <select
          value={options.city || ''}
          onChange={(e) => onFilterChange({ ...options, city: e.target.value || undefined })}
          className="bg-background border border-border rounded-md px-3 py-1.5"
        >
          <option value="">All Cities</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <select
          value={options.interests?.[0] || ''}
          onChange={(e) => onFilterChange({ ...options, interests: e.target.value ? [e.target.value] : undefined })}
          className="bg-background border border-border rounded-md px-3 py-1.5"
        >
          <option value="">All Interests</option>
          {interests.map(interest => (
            <option key={interest} value={interest}>{interest}</option>
          ))}
        </select>
      </div>
    </motion.div>
  );
}