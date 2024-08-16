import { Link, useLocation } from 'react-router-dom';

const MovieInfo = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Link to={location.current ?? '/'}>Go back</Link>

      <div>MovieInfo</div>
    </div>
  );
};

export default MovieInfo;
