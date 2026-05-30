import React from 'react';
import styled from 'styled-components';

const BoinaSvg = styled.svg`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-top: -4px;
`;

export const BoinaIcon: React.FC<{ color?: string }> = ({ color = '#C19A6B' }) => (
  <BoinaSvg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main body outline */}
    <path 
      d="M32 14C16 14 6 24 6 30C6 32 8 34 14 34C14 38 22 42 32 42C42 42 50 38 50 34C56 34 58 32 58 30C58 24 48 14 32 14Z" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Top button/pompon outline */}
    <path 
      d="M32 12C34.2 12 36 13.8 36 16C36 18.2 34.2 20 32 20C29.8 20 28 18.2 28 16C28 13.8 29.8 12 32 12Z" 
      stroke={color} 
      strokeWidth="2.5"
    />
    {/* Internal decorative line */}
    <path 
      d="M14 34C14 35 16 36 18 36" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round"
    />
  </BoinaSvg>
);
