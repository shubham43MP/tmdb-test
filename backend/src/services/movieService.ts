export const getMovies = async (moviename: string, page: number) => {
  const apiKey = process.env.OMDB_API_KEY;
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=${moviename}&page=${page}`
  );
  return response.json();
};

export const getMovieDetails = async (imdbID: string) => {
  const apiKey = process.env.OMDB_API_KEY;
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
  );
  return response.json();
};
