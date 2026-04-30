import { Modal, Button, Badge } from "react-bootstrap";

function SongDetailsModal({ song, show, onHide }) {
  if (!song) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{song.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={song.cover}
          alt={`${song.title} cover`}
          className="modal-cover-image"
        />
        <h4 className="mt-3">{song.artist}</h4>
        <div className="song-meta">
          <Badge bg="secondary">{song.genre}</Badge>
          <Badge bg="info">{song.year}</Badge>
          <Badge bg="dark">{song.duration}</Badge>
        </div>
        <p className="mt-3">
          <strong>Album:</strong> {song.album}
        </p>
        <p>{song.description || "No description available."}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SongDetailsModal;