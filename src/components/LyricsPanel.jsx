import { Card } from "react-bootstrap";

function LyricsPanel({ song }) {
  return (
    <Card className="lyrics-panel shadow-sm border-0">
      <Card.Body>
        <h2 className="section-title-small">Lyrics</h2>
        <p className="lyrics-text">
          {song.lyrics || "No lyrics available for this song."}
        </p>
      </Card.Body>
    </Card>
  );
}

export default LyricsPanel;