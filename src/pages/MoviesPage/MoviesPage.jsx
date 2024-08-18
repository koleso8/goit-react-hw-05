import { Field, Formik, Form } from 'formik';
import { searchMovie } from '../../services/api';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import seError from '../../components/useError/seError';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('search');
    if (!search) return;
    if (query.trim()) seError('Please, enter valid value');

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const searchMovies = await searchMovie(search);
        setMovies(searchMovies);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, searchParams]);

  if (isError) seError();

  const handleSubmit = async (res, options) => {
    setSearchParams(res);
    setQuery(res.search.trim());
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form className="flex justify-center mb-4">
          <Field
            className="bg-orange-400 text-zinc-700 font-medium ring-1 ring-zinc-700 focus:ring-2 focus:ring-orange-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-orange-400"
            type="text"
            placeholder="enter movies ..."
            name="search"
          />
        </Form>
      </Formik>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
