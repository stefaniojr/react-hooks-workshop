import React, { useContext, useState } from 'react';
import './Theme.css';

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeState>({isDarkMode: false, toggleTheme: () => {}});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ToggleComponent: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
    </div>
  );
};

const Theme: React.FC = () => {
  return (
    <ThemeProvider>
      <ToggleComponent />
    </ThemeProvider>
  );
};

export default Theme;