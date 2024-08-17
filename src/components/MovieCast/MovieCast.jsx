import React, { useEffect, useState } from 'react';
import { getCast } from '../../services/api';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastById = async () => {
      try {
        const data = await getCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCastById();
  }, [movieId]);

  return (
    <div>
      <ul className="flex gap-3 overflow-x-scroll">
        {cast.map(item => (
          <li
            className="w-60 p-4 bg-amber-600 text-black rounded-md flex flex-col "
            key={item.id}
          >
            {item.profile_path && (
              <img
                className="max-w-40"
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
              />
            )}
            <h3 className=" text-2xl text-center">{item.name}</h3>
            <p className="h-4  text-sm text-center overflow-y-scroll">
              Character:{item.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
