import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import FavoritesPage from "./pages/FavoritesPage";
import songs from "./data/songs";

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const toggleFavorite = (song) => {
    const exists = favorites.some((fav) => fav.id === song.id);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== song.id));
    } else {
      setFavorites([...favorites, song]);
    }
  };
  return (
    <BrowserRouter basename="/p11">
      <div className={darkMode ? "app-shell dark-mode" : "app-shell"}>
        <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage currentSong={currentSong} />} />
          <Route
            path="/library"
            element={
              <LibraryPage
                songs={songs}
                setCurrentSong={setCurrentSong}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
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
