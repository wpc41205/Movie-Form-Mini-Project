import React from 'react';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  className = '',
  disabled = false
}) => {
  const baseClasses = "flex-1 py-3 px-6 rounded-lg font-medium focus:ring-4 transition-all duration-200";
  
  const variantClasses = {
    primary: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-200 transform hover:scale-105",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-200"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;