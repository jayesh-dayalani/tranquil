'use client';

import ApplicationTypeOptions from "@/components/ApplicationTypeOptions";
import HeroSection from "@/components/HeroSection";
import ProductOptions from "@/components/ProductOptions";
import RadioOptions from "@/components/RadioOptions";
import TextInput from "@/components/TextInput";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import ProjectTimeLineOptions from "@/components/ProjectTimelineOptions";

export default function Home() {
  // All hooks must be inside the component
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]); // array of option IDs
  const [selectedRadio, setSelectedRadio] = useState(''); // radio value

  const [textFields, setTextFields] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company_name: '',
    designation: '',
    city: '',
    estimated_area: '',
    additional_notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  // added later
  const [applicationTypes, setApplicationTypes] = useState([]);
  const [projectTimeline, setProjectTimeline] = useState('');


  // Validation function
  const isFormValid = () => {
    if (!selectedCheckboxes.length) return false;
    if (!selectedRadio) return false;
    if (
      !textFields.first_name.trim() ||
      !textFields.last_name.trim() ||
      !textFields.email.trim() ||
      !textFields.company_name.trim() ||
      !textFields.designation.trim() ||
      !textFields.city.trim() ||
      !textFields.estimated_area.trim()
      // additional_notes can be optional
    ) return false;
    return true;
  };

  const defaultTextFields = {
    first_name: '',
    last_name: '',
    email: '',
    company_name: '',
    designation: '',
    city: '',
    estimated_area: '',
    additional_notes: '',
  };
  const clearForm = () => {
    setTextFields(defaultTextFields);
    setSelectedCheckboxes([]);
    setSelectedRadio('');
    setApplicationTypes([]);
    setProjectTimeline('');
    setMessage('');
    setError('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!isFormValid()) {
      setError('All fields are required. Please fill out every section.');
      return;
    }

    setLoading(true);

    // Prepare data to insert
    // const response = await supabase.from('user_responses').insert([
    //   {
    //     selected_options: selectedCheckboxes, // array
    //     selected_radio: selectedRadio,        // string
    //     first_name: textFields.first_name,
    //     last_name: textFields.last_name,
    //     email: textFields.email,
    //     application_types: applicationTypes,
    //     project_timeline: projectTimeline,
    //   },
    // ]);

    const response = await supabase.from('user_responses').insert([
      {
        selected_options: selectedCheckboxes,
        selected_radio: selectedRadio,
        first_name: textFields.first_name,
        last_name: textFields.last_name,
        email: textFields.email,
        company_name: textFields.company_name,
        designation: textFields.designation,
        city: textFields.city,
        estimated_area: textFields.estimated_area,
        additional_notes: textFields.additional_notes,
        application_types: applicationTypes,
        project_timeline: projectTimeline,
        salesman: 'nikhil'
      },
    ]);

    if (response.error) {
      setError('Error: ' + response.error.message);
    } else {
      setMessage('Submitted successfully!');
      // Optionally reset form
     clearForm()
    }
    setLoading(false);
  };

  return (
    <div>


      <HeroSection />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl space-y-5">

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Sales</h2>
            <p className="mt-2 text-lg/8 text-gray-600">Subheading here , for the matter of trust.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <TextInput
              value={textFields}
              onChange={setTextFields}
            />
            <ProductOptions
              value={selectedCheckboxes}
              onChange={setSelectedCheckboxes}
            />
            <ApplicationTypeOptions
              value={applicationTypes}
              onChange={setApplicationTypes}
            />
            <ProjectTimeLineOptions
              value={projectTimeline}
              onChange={setProjectTimeline}
            />

            <RadioOptions
              value={selectedRadio}
              onChange={setSelectedRadio}
            />

           <div className="flex gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300"
                onClick={clearForm}
                disabled={loading}
              >
                Clear Form
              </button>
            </div>
            {error && (
              <div className="mt-4 text-center text-sm text-red-700">{error}</div>
            )}
            {message && (
              <div className="mt-4 text-center text-sm text-green-700">{message}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
