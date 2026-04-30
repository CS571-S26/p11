import { Form } from "react-bootstrap";

function SearchBar({ search, setSearch }) {
  return (
    <Form.Group className="mb-4" controlId="song-search-input">
      <Form.Label className="visually-hidden">Search songs</Form.Label>

      <Form.Control
        type="text"
        placeholder="Search by song title or artist..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search songs by title or artist"
      />
    </Form.Group>
  );
}

export default SearchBar;