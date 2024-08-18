import { useEffect, useState } from 'react';
import { getCast } from '../../services/api';
import { useParams } from 'react-router-dom';
import seError from '../useError/seError';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    const fetchCastById = async () => {
      try {
        setIsError(false);
        const data = await getCast(movieId);
        setCast(data);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      }
    };

    fetchCastById();
  }, [movieId]);

  if (isError) {
    seError();
  } else {
    return (
      <div>
        <ul className="flex gap-3 overflow-x-scroll">
          {cast.map(item => (
            <li
              className="w-60 p-4 bg-amber-700 text-black rounded-xl flex flex-col "
              key={item.id}
            >
              {item.profile_path && (
                <img
                  className="max-w-40 rounded-xl mb-4"
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                />
              )}
              <h3 className=" text-2xl font-medium text-center">{item.name}</h3>
              <p className="h-6  text-sm text-center overflow-y-scroll">
                Character:{item.character}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
export default MovieCast;
