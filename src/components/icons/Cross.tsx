
import React from 'react';
import { LucideProps } from 'lucide-react';

export const CrossIcon = ({ 
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
    <path d="M14 2v6h6v8h-6v6H8v-6H2v-8h6V2z" />
  </svg>
);
