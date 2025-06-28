'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function RadioOptions({ value, onChange }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFollowUps = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('follow_up')
        .select('id, follow_up_name');
      if (error) {
        console.error('Error fetching follow up options:', error.message, error);
      } else {
        console.log(data);
        
        setOptions(data || []);
      }
      setLoading(false);
    };
    fetchFollowUps();
  }, []);

  if (loading) return <div className="text-gray-500">Loading...</div>;
  if (options.length === 0) return <div>No options found.</div>;

  return (
    <fieldset className="border border-gray-200 rounded-lg p-6">
      <legend className="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
      {/* <p className="mt-1 text-sm/6 text-gray-600">
        These are delivered via SMS to your mobile phone.
      </p> */}
      <div className="mt-6 space-y-6">
        {options.map((option, idx) => {
          const id = `push-${option.id}`;
          return (
            <div className="flex items-center gap-x-3" key={option.id}>
              <input
                id={id}
                name="push-notifications"
                type="radio"
                checked={value === option.id}
                onChange={() => onChange(option.id)}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
                {option.follow_up_name}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
