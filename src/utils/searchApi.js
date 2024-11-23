const OMDB_API_KEY = "8d2616f3"; // OMDb API key
const OMDB_API_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

export async function fetchMovies(searchTerm) {
  const response = await fetch(`${OMDB_API_URL}&s=${searchTerm}`);
  const data = await response.json();

  if (data.Response === "True") {
    return data.Search;
  } else {
    throw new Error(data.Error);
  }
}
