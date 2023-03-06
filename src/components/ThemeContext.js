import { createContext, useContext, useState } from 'react';

/**
 * createContext
 */
const ThemeContext = createContext(undefined);

/**
 * ThemeProvider for light dark theming and context passage
 * @param {context} param0
 * @returns
 */
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
