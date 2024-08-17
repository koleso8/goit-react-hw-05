import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzUyODZlMjI1YzljMDY4MTM2M2EyNWY5YjI3MDJiNiIsIm5iZiI6MTcyMzgwNDU5NS45OTAyMDMsInN1YiI6IjY2YmM3OGY4NzMwYzc0NDFiYWUxZTBkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.igoG0voZuC8baHzkd7QKDMDnEks2o8BAAVach4rv_K0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.headers.common[' Authorization'] = API_KEY;

export const getMovies = async () => {
  const { data } = await axios.get('/trending/movie/week');
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const getCast = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const searchMovie = async query => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query,
    },
  });
  return data.results;
};
