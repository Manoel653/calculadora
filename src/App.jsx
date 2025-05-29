import './assets/variables.css';
import './assets/theme.css';
import './assets/styles.css';

import { useState, useEffect } from "react";
import Calculator from "./components/Calculator";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Garante que o tema seja aplicado ao carregar
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app-container">
      <ThemeSwitch onToggle={toggleTheme} currentTheme={theme} />
      <Calculator />
    </div>
  );
}

export default App;