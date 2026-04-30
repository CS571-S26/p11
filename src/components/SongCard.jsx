import { Card, Button } from "react-bootstrap";

function SongCard({
  song,
  onPlay,
  isFavorite,
  toggleFavorite,
  isCurrent,
  onShowDetails,
}) {
  return (
    <Card className={`h-100 shadow-sm ${isCurrent ? "current-song-card" : ""}`}>
      <Card.Img
        variant="top"
        src={song.cover}
        alt={`${song.title} cover`}
        className="song-card-image"
      />

      <Card.Body>
        <Card.Title>{song.title}</Card.Title>
        <Card.Text>{song.artist}</Card.Text>

        <div className="d-flex gap-2 flex-wrap">
          <Button variant="primary" onClick={onPlay}>
            Play
          </Button>

          <Button
            variant={isFavorite ? "danger" : "outline-danger"}
            onClick={toggleFavorite}
          >
            {isFavorite ? "Unfavorite" : "Favorite"}
          </Button>

          <Button
            variant="outline-secondary"
            onClick={() => onShowDetails(song)}
          >
            Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SongCard;