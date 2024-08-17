import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="flex flex-wrap gap-1 justify-center items-center">
      {movies.map(item => (
        <li key={item.id}>
          <Link
            className=" relative text-xm font-bold text-gray-200"
            to={`/movies/${item.id}`}
            state={location}
          >
            <img
              className=" blur-xs brightness-[.4] hover:brightness-100 w-[200px] h-[113px] object-cover "
              src={
                `https://image.tmdb.org/t/p/w200` +
                (item.backdrop_path ||
                  item.poster_path ||
                  '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png')
              }
            />
            <h2 className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-5 pointer-events-none drop-shadow-4xl  w-full h-full  ">
              {item.title}
            </h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
