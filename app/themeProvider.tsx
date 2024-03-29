'use client';

import { ThemeProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';

type ThemeComponentProps = {
  children: React.ReactNode; // Corrected the type here for children
};

const ThemeProviderComponent = ({ children }: ThemeComponentProps) => {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderComponent;
