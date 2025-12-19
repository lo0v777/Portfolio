import { createContext, useContext, useState, useEffect } from 'react';
import { type ReactNode } from 'react';
import { ThemeSwitch } from '../../../shared/types/switchTheme';

type ThemeContextType = {
  theme: ThemeSwitch;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeSwitch>(ThemeSwitch.LIGHT);

  useEffect(() => {
    if (theme === ThemeSwitch.DARK) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev: ThemeSwitch) =>
      prev === ThemeSwitch.LIGHT ? ThemeSwitch.DARK : ThemeSwitch.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};