import React, { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearchResults = (results, errorMessage) => {
    setMovies(results || []); // handle movie list result
    setError(errorMessage || ""); // handle error 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search App</h1>
        <MovieSearch onSearchResults={handleSearchResults} />
        {error && <p className="error-message">{error}</p>}
        <MovieList movies={movies} />
      </header>
    </div>
  );
}

export default App;
