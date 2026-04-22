import { Row, Col } from "react-bootstrap";
import SongCard from "./SongCard";

function SongList({
  songs,
  setCurrentSong,
  favorites,
  toggleFavorite,
  currentSong,
}) {
  return (
    <Row>
      {songs.map((song) => (
        <Col md={6} lg={4} className="mb-4" key={song.id}>
          <SongCard
            song={song}
            onPlay={() => setCurrentSong(song)}
            isFavorite={favorites.some((fav) => fav.id === song.id)}
            toggleFavorite={() => toggleFavorite(song)}
            isCurrent={currentSong && currentSong.id === song.id}
          />
        </Col>
      ))}
    </Row>
  );
}

export default SongList;
