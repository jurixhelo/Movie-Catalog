import "./App.css";
import React, { useState } from "react";

const OMDB_API_KEY = "8d2616f3"; // Replace with your OMDb API key
const OMDB_API_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      const response = await fetch(`${OMDB_API_URL}&s=${searchTerm}`);
      const data = await response.json();

      if (data.Response === "True") {
        const topMovies = data.Search.slice(0, 3); // Get top 3 matches
        setMovies(topMovies);
        setError("");
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch movies. Try again later.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="movie-results">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-item">
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/150"
                  }
                  alt={movie.Title}
                />
              </a>
              <p>{movie.Title}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
