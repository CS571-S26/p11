import { Card, Button, Row, Col } from "react-bootstrap";

function RecentlyPlayed({ songs, setCurrentSong }) {
  return (
    <div className="recent-section">
      <h2 className="section-title">Recently Played</h2>
      <Row>
        {songs.map((song) => (
          <Col md={6} lg={4} className="mb-4" key={song.id}>
            <Card className="recent-card h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={song.cover}
                alt={song.title}
                className="song-card-image"
              />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.artist}</Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => setCurrentSong(song)}
                >
                  Play Again
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RecentlyPlayed;
