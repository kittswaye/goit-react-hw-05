import css from './MovieDetailsPage.module.css';
import { getMovieDetails } from '../../tmdb-api.js';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function MovieDetailsPage() {

  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(
    location ? location.state : "/"
  );

  useEffect(() => {
    getMovieDetails(movieId)
    .then((data) => {
      setDetails(data.data);
      const genresNames = data.data.genres.map((g) => g.name).join(", ");
      setGenres(genresNames);
    })
    .catch((error) => console.log(error))
  }, [movieId]);

  return (
    <>
    <div className={css.container}>
      <div className={css.backLink}>
        <Link to={backLinkRef.current}>&larr; Go back</Link>
      </div>
      <div className={css.details}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} />
        </div>
        <div className={css.overview}>
          <h2>{details.title}</h2>
          <p>User score: {Math.round(details.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{details.overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>
    </div>
    <div className={css.container}>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to='cast'>Cast</Link>
        </li>
        <li>
          <Link to='reviews'>Reviews</Link>
        </li>
      </ul>
    </div>
    <div>
      <Outlet />
    </div>
    </>
  );
}
