import { useState } from "react";
import NavBar from "./NavBar";
import ThemeButton from "./ThemeButton";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <NavBar theme={theme} />
      <h2>Day3: Theme Switcher</h2>
      <MainContent />
      <ThemeButton toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;