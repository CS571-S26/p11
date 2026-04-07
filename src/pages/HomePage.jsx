import { Container, Card } from "react-bootstrap";
import PlayerControls from "../components/PlayerControls";

function HomePage({ currentSong }) {
  return (
    <Container className="py-4">
      <h1 className="page-title">Welcome to Mini Music Player</h1>
      <Card className="shadow-sm p-4 home-card">
        <div className="home-layout">
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            className="cover-image"
          />
          <div>
            <h2>Now Playing</h2>
            <p className="song-title">{currentSong.title}</p>
            <p className="song-artist">{currentSong.artist}</p>
            <PlayerControls song={currentSong} />
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default HomePage;
