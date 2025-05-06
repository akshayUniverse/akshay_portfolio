'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
} 