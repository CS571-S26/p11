import { Container } from "react-bootstrap";
import SongList from "../components/SongList";

function FavoritesPage({ favorites, setCurrentSong, toggleFavorite }) {
  return (
    <Container className="py-5">
      <h1 className="page-title">Favorite Songs</h1>
      <p className="page-subtitle mb-4">Your saved songs in one place.</p>
      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>You have not added any favorite songs yet.</p>
        </div>
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
