import React from 'react';

const Logo = ({ className = "w-6 h-6", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect 
        x="2" y="2" width="20" height="20" rx="5" 
        stroke={color} 
        strokeWidth="1.5"
      />
      <path 
        d="M2 8H22" 
        stroke={color} 
        strokeWidth="1.5"
      />
      <path 
        d="M16 2V22" 
        stroke={color} 
        strokeWidth="1.5"
      />
      <circle cx="6.5" cy="5" r="1" fill={color} />
      <circle cx="11.5" cy="5" r="1" fill={color} />
    </svg>
  );
};

export default Logo;
