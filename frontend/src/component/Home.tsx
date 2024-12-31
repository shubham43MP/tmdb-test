import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { Movie } from './Types';
import { useDebounce } from '../hooks/useDebounce';
import { MovieList } from './MovieList';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedTerm = useDebounce(searchTerm, 500);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    if (!debouncedTerm) {
      setMovies([]);
      setError('');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/getMovies', {
        moviename: debouncedTerm,
        page: page,
      });
      const data = response.data;

      if (data.Search && data.Response) {
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);
        setHasMore(data.Search.length === 10);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while fetching movies');
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMovies([]);
    setPage(1);
    setError('');
  }, [searchTerm]);

  useEffect(() => {
    fetchMovies();
  }, [debouncedTerm, page]);

  const handleMovieClick = (imdbID: string) => {
    navigate(`/detail/${imdbID}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4">
      <h1 className="text-4xl font-extrabold mt-10 text-center text-gray-800">
        Find Your Favorite Movies
      </h1>
      <p className="text-gray-600 text-lg mt-2 text-center">
        Search movies by their name and explore details.
      </p>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {error && movies.length === 0 && <p className="text-red-500 mt-4">{error}</p>}
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <ClipLoader size={50} color="#3498db" loading={true} />
        </div>
      )}
      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={page > 1 && movies.length >0 && <h4>Loading...</h4>}
        endMessage={!error && movies.length > 10 && <p><b>Yay! You have seen it all</b></p>}
      >
        <div className="mt-6 w-full flex px-4 flex-wrap justify-center gap-6 bg-gradient-to-b from-gray-100 to-gray-300">
          {movies.length > 0 && <MovieList movies={movies} onMovieClick={handleMovieClick} />}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
