import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api';
import Movie from '../../components/Movie/Movie';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(movies);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Movie id={item.id} title={item.title} img={item.backdrop_path} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
