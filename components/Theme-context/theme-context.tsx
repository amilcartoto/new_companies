"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark" | "solarized";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Recuperamos el tema almacenado en localStorage o usamos el valor por defecto.
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light"); // tema por defecto
    }
  }, []);

  useEffect(() => {
    // Guardamos el tema en localStorage
    localStorage.setItem("theme", theme);

    // Cambiamos las clases del documento
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "solarized") {
      document.documentElement.classList.add("solarized");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("solarized");
    }
  }, [theme]);

  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }
  return context;
};
