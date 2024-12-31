import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { MovieDetails } from '../../utils/types';
import { baseUrl } from '../../utils/constants';

export const MovieDetail = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/movies/${ imdbID }`);
        const data: MovieDetails = response.data;
        if (response.statusText) {
          setMovie(data);
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching movie details');
      } finally {
        setLoading(false);
      }
    };

    if (imdbID) {
      fetchMovieDetails();
    }
  }, [imdbID]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-6 px-4">
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <ClipLoader size={50} color="#3498db" loading={true} />
        </div>
      )}
      {error && <p className="text-red-500 text-center text-lg font-medium">{error}</p>}
      {movie && (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 lg:p-8 space-y-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-40 h-60 object-cover rounded-md shadow-md lg:w-60 lg:h-80"
            />
            <div className="flex-1 text-center lg:text-left space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">{movie.Title}</h2>
              <p className="text-lg font-medium text-gray-600">{movie.Released}</p>
              <p className="text-gray-700 leading-relaxed">{movie.Plot}</p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Actors:</span> {movie.Actors}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Director:</span> {movie.Director}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Writer:</span> {movie.Writer}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div className="text-center bg-gray-50 rounded-md p-4 shadow-sm">
              <p className="font-semibold">IMDB Rating</p>
              <p className="text-lg">{movie.imdbRating}</p>
            </div>
            <div className="text-center bg-gray-50 rounded-md p-4 shadow-sm">
              <p className="font-semibold">Genre</p>
              <p className="text-lg">{movie.Genre}</p>
            </div>
            <div className="text-center bg-gray-50 rounded-md p-4 shadow-sm">
              <p className="font-semibold">Language</p>
              <p className="text-lg">{movie.Language}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
