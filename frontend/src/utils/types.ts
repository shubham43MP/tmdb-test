
export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}


export interface MovieDetails {
  Title: string;
  Released: string;
  Plot: string;
  Actors: string;
  Director: string;
  Writer: string;
  imdbRating: string;
  Genre: string;
  Language: string;
  Poster: string;
}

export interface MovieListProps {
  movies: Movie[];
  onMovieClick: (imdbID: string) => void;
}