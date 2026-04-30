import { useState } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import SongList from "../components/SongList";
import SongDetailsModal from "../components/SongDetailsModal";

function LibraryPage({
  songs,
  setCurrentSong,
  favorites,
  toggleFavorite,
  currentSong,
}) {
  const [search, setSearch] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);

  const filteredSongs = songs.filter((song) => {
    const text = search.toLowerCase();
    return (
      song.title.toLowerCase().includes(text) ||
      song.artist.toLowerCase().includes(text)
    );
  });

  return (
    <Container className="py-5">
      <h1 className="page-title">Music Library</h1>
      <p className="page-subtitle mb-4">
        Browse songs, search by title or artist, and choose what to play next.
      </p>

      <SearchBar search={search} setSearch={setSearch} />

      <SongList
        songs={filteredSongs}
        setCurrentSong={setCurrentSong}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        currentSong={currentSong}
        onShowDetails={setSelectedSong}
      />

      <SongDetailsModal
        song={selectedSong}
        show={selectedSong !== null}
        onHide={() => setSelectedSong(null)}
      />
    </Container>
  );
}

export default LibraryPage;