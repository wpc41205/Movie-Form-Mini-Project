import React from 'react';
import ErrorMessage from './ErrorMessage';

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  required = false,
  id
}) => {
  const errorId = `${id}-error`;
  
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ${
          error ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
        }`}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
        required={required}
      />
      <ErrorMessage error={error} id={errorId} />
    </div>
  );
};

export default InputField;