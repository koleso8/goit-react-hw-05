import { Field, Formik, Form } from 'formik';
import { searchMovie } from '../../services/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const searchMovies = await searchMovie(query);
        setMovies(searchMovies);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const handleSubmit = async (res, options) => {
    setQuery(res.search);
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form className="flex justify-center mb-4">
          <Field
            className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-rose-400"
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

export default Movies;
