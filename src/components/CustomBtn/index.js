import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({
  children,
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  width = 'w-auto',
  height = 'h-auto',
  borderRadius = 'rounded-md',
  className = '',
  disabled = false,
}) => {
  return (
    <button
      className={`
        ${bgColor} ${textColor} ${width} ${height} ${borderRadius} 
        inline-flex items-center justify-center font-medium transition duration-200 ease-in-out
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
        ${className}
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CustomButton;