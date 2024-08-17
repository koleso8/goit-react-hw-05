import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';
import { getMovieDetails } from '../../services/api';
import Loader from '../../components/Loader/Loader';
import seError from '../../components/useError/seError';

const MovieDetailsPage = () => {
  const [isError, setIsError] = useState('');
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/');

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setIsError(false);
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      }
    };

    fetchMovieById();
  }, [movieId]);

  if (isError) seError();

  const handleCountStar = rating => {
    let star = '';
    for (var i = 1; i <= 10; i++) {
      if (i <= rating) {
        star += '★';
      } else {
        star += '☆';
      }
    }
    return star;
  };

  if (!movie) {
    return <Loader />;
  }

  return (
    <div>
      <Link
        className="text-center"
        to={goBackRef.current}
        aria-label="Go back"
        title="Go back"
      >
        <IoArrowBackCircle className="text-zinc-900  fixed z-10 top-10 size-20 drop-shadow-[0_0_5px_rgba(241,90,34,0.9)]" />
      </Link>
      <div className="relative mb-4">
        <img
          className="max-h-screen w-full object-cover "
          src={
            'https://image.tmdb.org/t/p/original' +
            (movie.backdrop_path ||
              movie.poster_path ||
              '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png')
          }
          alt={movie.title}
        />
        <h2 className="absolute bottom-8 left-6 text-9xl font-bold text-white drop-shadow-4xl">
          {movie.title}
        </h2>
      </div>
      <span
        title={movie.vote_average.toFixed(1)}
        className="flex pt-1 pb-1 pl-2 w-52 border-none rounded-lg bg-orange-500 text-center text-black mb-4"
      >
        Rating: {handleCountStar(movie.vote_average.toFixed(1)) || 'No ratig'}
      </span>
      <div>
        <h3 className="text-xl text-orange-500 mb-2">Overwiew</h3>
        <span className=" p-2 outline-dashed outline-amber-600 block mb-4">
          {movie.overview}
        </span>

        <h3 className="text-xl mb-2 text-orange-500 ">Genres</h3>
        <span className="p-2 outline-dashed outline-amber-600 block mb-4">
          {movie.genres.map(genre => genre.name).join(', ')}
        </span>
      </div>
      <div>
        <div className="flex">
          <NavLink
            className="text-2xl font-medium w-1/2 text-center p-4 border-2 border-amber-600 rounded-l-lg mb-4 hover:bg-amber-500 hover:text-black"
            to="cast"
          >
            Cast
          </NavLink>

          <NavLink
            className="text-2xl font-medium w-1/2 text-center p-4 border-2 border-amber-600 rounded-r-lg mb-4 hover:bg-amber-500 hover:text-black"
            to="reviews"
          >
            Reviews
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
