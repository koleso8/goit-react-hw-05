import axios from 'axios';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzUyODZlMjI1YzljMDY4MTM2M2EyNWY5YjI3MDJiNiIsIm5iZiI6MTcyMzgwNDU5NS45OTAyMDMsInN1YiI6IjY2YmM3OGY4NzMwYzc0NDFiYWUxZTBkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.igoG0voZuC8baHzkd7QKDMDnEks2o8BAAVach4rv_K0',
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return data.results;
};

export const fetchSearchMovies = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  console.log(query);

  return data.results;
};
