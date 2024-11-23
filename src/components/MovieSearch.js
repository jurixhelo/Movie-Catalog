import React, { useState } from "react";
import { fetchMovies } from "../utils/searchApi";

function MovieSearch({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      const movies = await fetchMovies(searchTerm);
      onSearchResults(movies.slice(0, 3), ""); // Pass top 3 results to parent
    } catch (error) {
      onSearchResults([], error.message);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default MovieSearch;
