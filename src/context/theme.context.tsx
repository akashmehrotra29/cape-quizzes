import { createContext, useState, useContext, useEffect } from "react";

type Theme = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

const ThemeContext = createContext<Theme>({} as Theme);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const root = window.document.documentElement;
    if (root.classList.contains("light")) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
