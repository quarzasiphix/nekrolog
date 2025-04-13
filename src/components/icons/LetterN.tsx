
import React from 'react';
import { LucideProps } from 'lucide-react';

export const LetterN = ({ 
  size = 24, 
  color = 'currentColor', 
  strokeWidth = 2, 
  ...props 
}: LucideProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M4 4v16l8-8 8 8V4" />
  </svg>
);
