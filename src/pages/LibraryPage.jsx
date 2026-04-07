import { useState } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import SongList from "../components/SongList";

function LibraryPage({ songs, setCurrentSong, favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");
  const filteredSongs = songs.filter((song) => {
    const text = search.toLowerCase();
    return (
      song.title.toLowerCase().includes(text) ||
      song.artist.toLowerCase().includes(text)
    );
  });
  return (
    <Container className="py-4">
      <h1 className="page-title">Music Library</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <SongList
        songs={filteredSongs}
        setCurrentSong={setCurrentSong}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </Container>
  );
}

export default LibraryPage;
