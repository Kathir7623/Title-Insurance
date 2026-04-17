import React from 'react';

const Logo = ({ height = 70, className = "" }) => {
  const brandColor = "rgb(237, 122, 28)";
  
  return (
    <div style={{ height, display: 'flex', alignItems: 'center' }} className={className}>
      <svg 
        viewBox="0 0 400 300" 
        height={height} 
        style={{ width: 'auto' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Roof Structure */}
        <path 
          d="M 20 120 L 200 20 L 380 120" 
          stroke={brandColor} 
          strokeWidth="15" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M 50 120 L 200 40 L 350 120" 
          stroke={brandColor} 
          strokeWidth="8" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          opacity="0.8"
        />
        
        {/* Chimney */}
        <path 
          d="M 280 80 L 280 40 L 320 40 L 320 110" 
          fill={brandColor} 
        />
        
        {/* 'KM' Text */}
        <text 
          x="200" 
          y="230" 
          textAnchor="middle" 
          style={{ 
            fill: brandColor, 
            fontSize: '140px', 
            fontWeight: 900, 
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: '-5px'
          }}
        >
          KM
        </text>
        
        {/* 'TITLE INSURANCE' Text */}
        <text 
          x="200" 
          y="280" 
          textAnchor="middle" 
          style={{ 
            fill: brandColor, 
            fontSize: '32px', 
            fontWeight: 700, 
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '8px'
          }}
        >
          TITLE INSURANCE
        </text>
        
        {/* Bottom underline wave */}
        <path 
          d="M 40 250 Q 200 230 360 250" 
          stroke={brandColor} 
          strokeWidth="4" 
          fill="none" 
          opacity="0.5"
          style={{ display: 'none' }}
        />
      </svg>
    </div>
  );
};

export default Logo;
