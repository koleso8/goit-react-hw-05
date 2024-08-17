import { useEffect, useState } from 'react';
import { getMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import seError from '../../components/useError/seError';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isError) {
    seError();
  } else
    return (
      <>
        {isLoading && <Loader />}
        <h2 className="text-center text-4xl font-medium text-amber-600 mb-3">
          Trending today
        </h2>

        <MovieList movies={movies} />
      </>
    );
};

export default HomePage;
