function ThemeButton({ toggleTheme, theme }) {
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark 🌙" : "Light 🌞"} Mode
    </button>
  );
}

export default ThemeButton;