'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ProductOptions({ value = [], onChange }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('product_options')
        .select('id, option_name, option_subname');
      if (error) {
        console.error('Error fetching product options:', error.message, error);
      } else {
        setOptions(data || []);
      }
      setLoading(false);
    };
    fetchOptions();
  }, []);

  // Handler for checkbox change
  const handleCheckboxChange = (optionId) => {
    let newValue;
    if (value.includes(optionId)) {
      newValue = value.filter((id) => id !== optionId);
    } else {
      newValue = [...value, optionId];
    }
    onChange && onChange(newValue);
  };

  if (loading) return <div className="text-gray-500">Loading...</div>;
  if (options.length === 0) return <div>No options found.</div>;

  return (
    <fieldset className="border border-gray-200 rounded-lg p-6">
      <legend className="font-semibold text-gray-900">Product Options</legend>
      <div className="mt-3 space-y-3">
        {options.map((option) => (
          <div className="flex gap-3" key={option.id}>
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  id={`option-${option.id}`}
                  name={`option-${option.id}`}
                  type="checkbox"
                  aria-describedby={`option-desc-${option.id}`}
                  checked={value.includes(option.id)}
                  onChange={() => handleCheckboxChange(option.id)}
                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-checked:opacity-100"
                  />
                  <path
                    d="M3 7H11"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-indeterminate:opacity-100"
                  />
                </svg>
              </div>
            </div>
            <div className="text-sm/6">
              <label htmlFor={`option-${option.id}`} className="font-medium text-gray-900">
                {option.option_name}
              </label>
              <p id={`option-desc-${option.id}`} className="text-gray-500">
                {option.option_subname}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
