import { Container } from "react-bootstrap";
import SongList from "../components/SongList";

function FavoritesPage({ favorites, setCurrentSong, toggleFavorite }) {
  return (
    <Container className="py-4">
      <h1 className="page-title">Favorite Songs</h1>
      {favorites.length === 0 ? (
        <p>You have not added any favorite songs yet.</p>
      ) : (
        <SongList
          songs={favorites}
          setCurrentSong={setCurrentSong}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </Container>
  );
}

export default FavoritesPage;
