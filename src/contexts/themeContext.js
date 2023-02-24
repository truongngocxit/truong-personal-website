import { createContext, useState } from "react";

const themeContext = createContext({});

export const ThemeContextProvider = function ({ children }) {
  const [isDark, setIsDark] = useState(false);
  const handleToggleTheme = function () {
    setIsDark((theme) => !theme);
  };
  return (
    <themeContext.Provider
      value={{
        isDark,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default themeContext;
