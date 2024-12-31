import React from 'react';
import { ClipLoader } from 'react-spinners';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SearchBar, MovieList } from '../../components';
import useHome from './useHome';

export const Home = () => {
  const {
    error,
    searchTerm,
    movies,
    hasMore,
    loading,
    page,
    setPage,
    handleMovieClick,
    setSearchTerm,
  } = useHome()


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