import { Field, Formik, Form } from 'formik';
import { fetchSearchMovies } from '../../api';
import { useState } from 'react';
import Movie from '../../components/Movie/Movie';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const handleSubmit = async (res, options) => {
    const searchMovies = await fetchSearchMovies(res.search);
    setMovies(searchMovies);
    options.resetForm();
    console.log(searchMovies);
  };
  const [searhParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" placeholder="enter movies ..." name="search" />
        </Form>
      </Formik>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Movie id={item.id} title={item.title} img={item.backdrop_path} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
