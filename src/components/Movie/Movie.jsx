import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, title }) => {
  return <Link to={`/movies/${id}`}>{title}</Link>;
};

export default Movie;
