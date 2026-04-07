import { Form } from "react-bootstrap";

function SearchBar({ search, setSearch }) {
  return (
    <Form.Control
      type="text"
      placeholder="Search by song title or artist..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-4"
    />
  );
}

export default SearchBar;
