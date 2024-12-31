import { getMovies, getMovieDetails } from "../services/movieService";

type GetMoviesQuery = {
  movieName: string;
  page: number;
};

type GetMovieQuery = {
  imdbID: string;
};

export const getMoviesController = async (req: {query: GetMoviesQuery}, res: any) => {
  try {
    const { movieName, page } = req.query;

    if (!movieName) {
      return res.status(400).json({ error: "Movie name is required" });
    }

    const movies = await getMovies(movieName, page);
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching movie data.");
  }
};

export const getMovieDetailsController = async (
  req: {params: GetMovieQuery}, res: any
) => {
  try {
    const { imdbID } = req.params;

    if (!imdbID) {
      return res.status(400).json({ error: "IMDb ID is required" });
    }

    const movieDetails = await getMovieDetails(imdbID);
    res.json(movieDetails);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching movie details.");
  }
};
