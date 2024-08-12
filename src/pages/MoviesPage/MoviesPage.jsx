import css from './MoviesPage.module.css';
import { useSearchParams } from "react-router-dom";
import { searchMovie } from '../../tmdb-api.js';
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList.jsx';

export default function MoviesPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      searchMovie(query)
        .then((data) => setMovies(data.data.results))
        .catch((error) => console.log(error))
    }
  }, [query]);

  const submit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;
    if (query) {
      setSearchParams({ query: query });
		}
    form.reset();
  }

  return (
      <div className={css.container}>
        <form onSubmit={submit}>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              name="query"
              className={css.input}
            />
            <button type="submit" className={css.search}>Search</button>
          </form>
          <MovieList movies={movies} state={`/movies?query=${query}`} />
      </div>
  );
}
