'use client';

import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

interface ParallaxWrapperProps {
  children: React.ReactNode;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children }) => {
  return (
    <ParallaxProvider>
      {children}
    </ParallaxProvider>
  );
};

export default ParallaxWrapper; 