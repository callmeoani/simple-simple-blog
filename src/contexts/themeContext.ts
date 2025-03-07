import { createContext } from "react";

type ThemeContextType = {
  theme: string,
  setTheme: (value: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({});

export default ThemeContext;
