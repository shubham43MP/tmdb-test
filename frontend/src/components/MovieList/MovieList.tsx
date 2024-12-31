import React from 'react';
import { MovieListProps } from '../../utils/types';

export const MovieList = ({ movies, onMovieClick }:MovieListProps) => (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
      {movies.map((movie) => (
        <li
          key={movie.imdbID}
          onClick={() => onMovieClick(movie.imdbID)}
          className="p-6 border rounded-lg shadow-sm bg-white flex flex-col items-center space-y-4 cursor-pointer hover:shadow-md transition-shadow duration-200"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-48 h-60 object-cover rounded-md"
          />
          <div className="text-center">
            <h2 className="text-lg font-semibold">{movie.Title}</h2>
            <p className="text-gray-600">{movie.Year}</p>
          </div>
        </li>
      ))}
    </ul>
  );