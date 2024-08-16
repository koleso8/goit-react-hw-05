import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Movie = ({ id, title, backdrop_path }) => {
  const location = useLocation();

  return (
    <div>
      <Link to={`/movies/${id}`} state={location}>
        {title}
      </Link>
      <img src={backdrop_path} />
    </div>
  );
};

export default Movie;
