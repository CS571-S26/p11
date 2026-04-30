import { Card, ListGroup, Badge } from "react-bootstrap";

function QueuePanel({ songs, currentSong, setCurrentSong }) {
  const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

  const upcomingSongs = [
    ...songs.slice(currentIndex + 1),
    ...songs.slice(0, currentIndex),
  ].slice(0, 3);

  return (
    <Card className="queue-panel shadow-sm border-0">
      <Card.Body>
        <h2 className="section-title-small">Up Next</h2>

        <ListGroup variant="flush">
          <ListGroup.Item className="queue-current">
            <div>
              <strong>{currentSong.title}</strong>
              <p>{currentSong.artist}</p>
            </div>
            <Badge bg="primary">Playing</Badge>
          </ListGroup.Item>

          {upcomingSongs.map((song) => (
            <ListGroup.Item
              key={song.id}
              className="queue-item"
              onClick={() => setCurrentSong(song)}
            >
              <div>
                <strong>{song.title}</strong>
                <p>{song.artist}</p>
              </div>
              <span>Play</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default QueuePanel;