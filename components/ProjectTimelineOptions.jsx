// components/PreferredFollowUpOptions.js
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ProjectTimeLineOptions({ value, onChange }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('project_timeline')
        .select('id, timeline_name');
      if (error) {
        console.error('Error fetching preferred follow up:', error.message, error);
      } else {
        setOptions(data || []);
      }
      setLoading(false);
    };
    fetchOptions();
  }, []);

  if (loading) return <div className="text-gray-500">Loading...</div>;
  if (options.length === 0) return <div>No timeline options found.</div>;

  return (
    <fieldset className="border border-gray-200 rounded-lg p-6">
      <legend className="font-semibold text-gray-900">Project Timeline</legend>
      <div className="mt-3 space-y-6">
        {options.map((option) => (
          <div className="flex items-center gap-x-3" key={option.id}>
            <input
              id={`pref-followup-${option.id}`}
              type="radio"
              name="preferredFollowUp"
              checked={value === option.id}
              onChange={() => onChange(option.id)}
              className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
            />
            <label htmlFor={`pref-followup-${option.id}`} className="block text-sm/6 font-medium text-gray-900">
              {option.timeline_name}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
