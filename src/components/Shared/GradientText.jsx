import React from 'react';

const GradientText = ({ 
  children, 
  className = '',
  gradient = 'primary',
  ...props 
}) => {
  const gradientClass = gradient === 'primary' 
    ? 'gradient-primary' 
    : gradient === 'secondary'
    ? 'gradient-secondary'
    : 'gradient-accent';

  return (
    <span 
      className={`text-gradient ${gradientClass} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default GradientText;