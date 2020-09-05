import React, { useState, createContext } from "react";
import { Appearance } from "react-native-appearance";
import AsyncStorage from "@callstack/async-storage";
import { getTheme } from "@/theme";

const osScheme = Appearance.getColorScheme();

export const ManageThemeContext = createContext({
  scheme: osScheme,
  theme: getTheme(osScheme),
  toggle: () => {}
});

export const ThemeManager = ({ defaultTheme, children }) => {
  const [scheme, setScheme] = useState(defaultTheme || osScheme);
  const theme = getTheme(scheme);
  const toggle = () => {
    if (scheme === "light") {
      setScheme("dark");
      AsyncStorage.setItem("theme", "dark");
    } else {
      setScheme("light");
      AsyncStorage.setItem("theme", "light");
    }
  };

  return (
    <ManageThemeContext.Provider value={{ scheme, theme, toggle }}>
      {children}
    </ManageThemeContext.Provider>
  );
};
