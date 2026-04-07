import { Button } from "react-bootstrap";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <Button
      variant={darkMode ? "light" : "outline-light"}
      onClick={() => setDarkMode(!darkMode)}
      className="rounded-pill px-3 fw-semibold"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}

export default ThemeToggle;
