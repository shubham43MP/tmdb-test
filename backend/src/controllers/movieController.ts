import { getMovies, getMovieDetails } from "../services/movieService";

type GetMoviesRequestBody = {
  moviename: string;
  page: number;
};

type GetMovieDetailsRequestBody = {
  imdbID: string;
};

export const getMoviesController = async (req: {body: GetMoviesRequestBody}, res: any) => {
  try {
    const { moviename, page } = req.body;

    if (!moviename) {
      return res.status(400).json({ error: "Movie name is required" });
    }

    const movies = await getMovies(moviename, page);
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching movie data.");
  }
};

export const getMovieDetailsController = async (
  req: {body: GetMovieDetailsRequestBody}, res: any
) => {
  try {
    const { imdbID } = req.body;

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
