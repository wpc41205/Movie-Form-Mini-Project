import React from 'react';

const TextAreaField = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  id
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaField;