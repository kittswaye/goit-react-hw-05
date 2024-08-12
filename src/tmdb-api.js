import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWM0MGY2NTVjNTk2MjlmYWVjZjcxYzU0ZTQwZGI5MiIsIm5iZiI6MTcyMzEzMjAzNS42NzQzMTcsInN1YiI6IjY2YjNkMzI2OGQ5YTU5OTExMzRiZmM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fVOYninGEdzpT3-5u63fIlM9BdpDUjfRnt88utsjEDE'
  }
};

export const getTrendingMovies = async () => {
  return await axios.get(`trending/movie/day`, options);
};

export const getMovieDetails = async (movieId) => {
  return await axios.get(`movie/${movieId}`, options);
};

export const getCast = async (movieId) => {
  return await axios.get(`movie/${movieId}/credits`, options);
};

export const getReviews = async (movieId) => {
  return await axios.get(`movie/${movieId}/reviews`, options);
};

export const searchMovie = async (query) => {
  return await axios.get(`search/movie?query=${query}`, options);
};
