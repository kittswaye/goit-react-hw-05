import css from './MovieCast.module.css';
import { useState, useEffect } from 'react';
import { getCast } from '../../tmdb-api.js';
import { useParams } from 'react-router-dom';

export default function MovieCast() {

  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
    .then((data) => setCast(data.data.cast))
    .catch((error) => console.log(error))
  }, []);

  return (
      <>
      <ul className={css.actors}>
        {cast.map((actor) => (
          <li key={actor.id}>
              <img width="100" height="150" src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
      </>
  );
}
