import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function NavigationBar({ darkMode, setDarkMode }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Mini Music Player
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="music-navbar" />
        <Navbar.Collapse id="music-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/library">
              Library
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav>

          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
