import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../utils/types';
import { useDebounce } from '../../hooks/useDebounce';
import { baseUrl } from '../../utils/constants';

const useHome = () => {
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
        const response = await axios.get(`${baseUrl}/movies?moviename=${debouncedTerm}&page=${page}`);
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

    return {
        error,
        searchTerm,
        movies,
        loading,
        page,
        setPage,
        setSearchTerm,
        handleMovieClick,
        hasMore
    }
}

export default useHome