import React from 'react';
import ErrorMessage from './ErrorMessage';

const RadioGroup = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  required = false,
  renderOption = (option) => option.label,
  id
}) => {
  const errorId = `${id}-error`;
  const groupId = `${id}-group`;
  
  return (
    <div>
      <label htmlFor={groupId} className="block text-sm font-medium text-gray-700 mb-3">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div id={groupId} role="radiogroup" aria-invalid={error ? "true" : "false"} aria-describedby={error ? errorId : undefined}>
        {options.map((option, index) => (
          <label
            key={option.value}
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
              value === option.value
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
              aria-describedby={error ? errorId : undefined}
            />
            <div className="ml-3">
              {renderOption(option)}
            </div>
          </label>
        ))}
      </div>
      <ErrorMessage error={error} id={errorId} />
    </div>
  );
};

export default RadioGroup;