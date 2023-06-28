import axios from 'axios';
import defaultImg from 'images/no-img.jpg';

const { REACT_APP_API_KEY, REACT_APP_BASE_URL, REACT_APP_BASE_URL_IMAGE } =
  process.env;

const API_KEY = REACT_APP_API_KEY;
const BASE_URL = REACT_APP_BASE_URL;
const BASE_URL_IMAGE = REACT_APP_BASE_URL_IMAGE;

axios.defaults.baseURL = BASE_URL;

const getTrending = async currentPage => {
  const params = {
    api_key: API_KEY,
    page: currentPage,
  };

  const { data } = await axios.get('/trending/movie/day', {
    params,
  });

  const results = data.results.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster_path: getImagePath(poster_path),
  }));

  data.results = results;
  if (data.total_pages > 500) data.total_pages = 500;

  return data;
};

const searchMoviesByQuery = async ({ query, currentPage }) => {
  const params = {
    api_key: API_KEY,
    query,
    page: currentPage,
  };

  const { data } = await axios.get('/search/movie', { params });

  const results = data.results.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster_path: getImagePath(poster_path),
  }));

  data.results = results;
  if (data.total_pages > 500) data.total_pages = 500;

  return data;
};

const getMovieDetails = async movieId => {
  const params = {
    api_key: API_KEY,
  };

  const { data } = await axios.get(`/movie/${movieId}`, {
    params,
  });

  const {
    poster_path,
    title,
    tagline,
    adult,
    release_date,
    vote_average,
    overview,
    genres,
    production_countries,
  } = data;

  return {
    poster_path: getImagePath(poster_path),
    title,
    tagline,
    adult,
    release_date: new Date(release_date).getFullYear(),
    vote_average: vote_average.toFixed(1),
    overview,
    genres: genres.map(genre => genre.name).join(', '),
    production_countries: production_countries
      .map(country => country.name)
      .join(', '),
  };
};

const getMovieCredits = async movieId => {
  const params = {
    api_key: API_KEY,
  };

  const { data } = await axios.get(`/movie/${movieId}/credits`, { params });

  const cast = data.cast.map(({ profile_path, character, name }) => ({
    profile_path: getImagePath(profile_path),
    character,
    name,
  }));

  return cast;
};

const getMovieReviews = async movieId => {
  const params = {
    api_key: API_KEY,
  };

  const { data } = await axios.get(`/movie/${movieId}/reviews`, { params });

  const reviews = data.results.map(({ author, content }) => ({
    author,
    content,
  }));

  return reviews;
};

const getImagePath = file_path => {
  return file_path ? `${BASE_URL_IMAGE}${file_path}` : defaultImg;
};

export {
  getTrending,
  searchMoviesByQuery,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
