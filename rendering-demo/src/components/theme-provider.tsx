'use client';

import { createContext, useContext } from 'react';

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: '#21618c',
    secondary: ' #7d6608 ',
  },
};

export const ThemeContext = createContext(defaultTheme);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({
  children,
}: ThemeProviderProps): JSX.Element {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): Theme => useContext(ThemeContext);
