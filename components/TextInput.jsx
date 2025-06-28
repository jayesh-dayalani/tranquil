'use client';

export default function TextInput({ value, onChange }) {
  // value: { first_name, last_name, email, company_name, designation, city, estimated_area, additional_notes }
  // onChange: (newValue) => void

  const handleChange = (e) => {
    const { name, value: val } = e.target;
    onChange({ ...value, [name]: val });
  };

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      {/* First Name */}
      <div className="sm:col-span-3">
        <label htmlFor="first_name" className="block text-sm/6 font-medium text-gray-900">
          First name
        </label>
        <div className="mt-2">
          <input
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            value={value.first_name || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      {/* Last Name */}
      <div className="sm:col-span-3">
        <label htmlFor="last_name" className="block text-sm/6 font-medium text-gray-900">
          Last name
        </label>
        <div className="mt-2">
          <input
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            value={value.last_name || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      {/* Email */}
      <div className="sm:col-span-6">
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={value.email || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      {/* Company Name */}
      <div className="sm:col-span-3">
        <label htmlFor="company_name" className="block text-sm/6 font-medium text-gray-900">
          Company Name
        </label>
        <div className="mt-2">
          <input
            id="company_name"
            name="company_name"
            type="text"
            value={value.company_name || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      {/* Designation */}
      <div className="sm:col-span-3">
        <label htmlFor="designation" className="block text-sm/6 font-medium text-gray-900">
          Designation
        </label>
        <div className="mt-2">
          <input
            id="designation"
            name="designation"
            type="text"
            value={value.designation || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      {/* City */}
      <div className="sm:col-span-3">
        <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
          City
        </label>
        <div className="mt-2">
          <input
            id="city"
            name="city"
            type="text"
            value={value.city || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      {/* Estimated Area */}
      <div className="sm:col-span-3">
        <label htmlFor="estimated_area" className="block text-sm/6 font-medium text-gray-900">
          Estimated Area (sq ft)
        </label>
        <div className="mt-2">
          <input
            id="estimated_area"
            name="estimated_area"
            type="text"
            value={value.estimated_area || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      {/* Additional Notes */}
      <div className="sm:col-span-6">
        <label htmlFor="additional_notes" className="block text-sm/6 font-medium text-gray-900">
          Additional Notes
        </label>
        <div className="mt-2">
          <textarea
            id="additional_notes"
            name="additional_notes"
            rows={3}
            value={value.additional_notes || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
    </div>
  );
}
