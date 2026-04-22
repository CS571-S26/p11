import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import FavoritesPage from "./pages/FavoritesPage";
import songs from "./data/songs";

function App() {
  const [currentSong, setCurrentSongState] = useState(songs[0]);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [recentlyPlayed, setRecentlyPlayed] = useState([songs[0]]);
  const [repeatMode, setRepeatMode] = useState(false);
  const [shuffleMode, setShuffleMode] = useState(false);

  const setCurrentSong = (song) => {
    setCurrentSongState(song);

    setRecentlyPlayed((prev) => {
      const updated = [song, ...prev.filter((item) => item.id !== song.id)];
      return updated.slice(0, 5);
    });
  };

  const toggleFavorite = (song) => {
    const exists = favorites.some((fav) => fav.id === song.id);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== song.id));
    } else {
      setFavorites([...favorites, song]);
    }
  };

  const getCurrentSongIndex = () => {
    return songs.findIndex((song) => song.id === currentSong.id);
  };

  const playNextSong = () => {
    if (shuffleMode) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentSong(songs[randomIndex]);
      return;
    }

    const currentIndex = getCurrentSongIndex();
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const playPreviousSong = () => {
    const currentIndex = getCurrentSongIndex();
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[previousIndex]);
  };

  return (
    <BrowserRouter basename="/p11">
      <div className={darkMode ? "app-shell dark-mode" : "app-shell"}>
        <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                currentSong={currentSong}
                songs={songs}
                setCurrentSong={setCurrentSong}
                recentlyPlayed={recentlyPlayed}
                playNextSong={playNextSong}
                playPreviousSong={playPreviousSong}
                repeatMode={repeatMode}
                setRepeatMode={setRepeatMode}
                shuffleMode={shuffleMode}
                setShuffleMode={setShuffleMode}
              />
            }
          />

          <Route
            path="/library"
            element={
              <LibraryPage
                songs={songs}
                setCurrentSong={setCurrentSong}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                currentSong={currentSong}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                setCurrentSong={setCurrentSong}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
