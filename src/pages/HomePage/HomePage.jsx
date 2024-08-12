import css from './HomePage.module.css';
import { getTrendingMovies } from '../../tmdb-api.js';
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { useLocation } from 'react-router-dom';

export default function HomePage() {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
    .then((data) => setTrendingMovies(data.data.results))
    .catch((error) => console.log(error))
  }, []);

  return (
      <>
        <h1>Trending today</h1>
        <MovieList movies={trendingMovies} state={location} />
      </>
  );
}
