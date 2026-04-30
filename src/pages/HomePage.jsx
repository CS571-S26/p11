import { Container, Card, Badge } from "react-bootstrap";
import PlayerControls from "../components/PlayerControls";
import RecentlyPlayed from "../components/RecentlyPlayed";
import LyricsPanel from "../components/LyricsPanel";
import QueuePanel from "../components/QueuePanel";

function HomePage({
  currentSong,
  songs,
  setCurrentSong,
  recentlyPlayed,
  playNextSong,
  playPreviousSong,
  repeatMode,
  setRepeatMode,
  shuffleMode,
  setShuffleMode,
}) {
  return (
    <Container className="py-5">
      <div className="hero-header">
        <div>
          <h1 className="page-title">Mini Music Player</h1>
          <p className="page-subtitle">
            A simple and interactive web music player for browsing, playing, and
            saving your favorite songs.
          </p>
        </div>
      </div>
      <Card className="player-card shadow-lg border-0">
        <div className="player-card-content">
          <div className="cover-section">
            <img
              src={currentSong.cover}
              alt={`${currentSong.title} cover`}
              className="cover-image"
            />
          </div>
          <div className="info-section">
            <Badge bg="dark" className="playing-badge">
              Now Playing
            </Badge>
            <h2 className="song-title">{currentSong.title}</h2>
            <p className="song-artist">{currentSong.artist}</p>
            <PlayerControls
              song={currentSong}
              songs={songs}
              playNextSong={playNextSong}
              playPreviousSong={playPreviousSong}
              repeatMode={repeatMode}
              setRepeatMode={setRepeatMode}
              shuffleMode={shuffleMode}
              setShuffleMode={setShuffleMode}
            />
          </div>
        </div>
      </Card>
      <LyricsPanel song={currentSong} />
      <QueuePanel
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <RecentlyPlayed songs={recentlyPlayed} setCurrentSong={setCurrentSong} />
    </Container>
  );
}

export default HomePage;