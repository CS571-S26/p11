import { Button } from "react-bootstrap";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <Button
      variant={darkMode ? "light" : "outline-light"}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}

export default ThemeToggle;
