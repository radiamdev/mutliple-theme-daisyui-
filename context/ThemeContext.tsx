"use client"

import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface ThemeContextType {
  theme?: string;
  changeTheme?: (e?: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) setTheme(storedTheme);
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeTheme = (event?: any) => {
    const nextTheme: string | null = event.target.value || null;
    if (nextTheme) {
      setTheme(nextTheme);
      // Check if localStorage is available (client-side)
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", nextTheme);
      }
    } else {
      setTheme((prev) => (prev === "light" ? "forest" : "light"));
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
