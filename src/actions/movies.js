import axios from "axios";

const API_KEY = "dc4abdd12b06e1a27b45f8678c0a1a7a";
const URL = `https://api.themoviedb.org/3`;
const popularMovieURL = `${URL}/movie/popular?api_key=${API_KEY}`;
const latestMovieURL = `${URL}/movie/latest?api_key=${API_KEY}`;
const nowPlayingMovieURL = `${URL}/movie/now_playing?api_key=${API_KEY}`;
const topRatedMovieURL = `${URL}/movie/top_rated?api_key=${API_KEY}`;
const upcomingMovieURL = `${URL}/movie/upcoming?api_key=${API_KEY}`;
const searchMovieURL = `${URL}/search/movie?api_key=${API_KEY}&query=`;

export const getPopularMovies = (pageNumber) => async (dispatch) => {
  const { data } = await axios.get(`${popularMovieURL}&page=${pageNumber}`);
  dispatch({
    type: "FETCH_POPULAR",
    payload: data.results,
  });
};
export const getLatestMovies = () => async (dispatch) => {
  const { data } = await axios.get(`${latestMovieURL}`);
  dispatch({ type: "FETCH_LATEST", payload: data });
};
export const getNowPlayingMovies = (pageNumber) => async (dispatch) => {
  const { data } = await axios.get(`${nowPlayingMovieURL}&page=${pageNumber}`);
  dispatch({
    type: "FETCH_NOW_PLAYING",
    payload: data.results,
  });
};
export const getTopRatedMovies = (pageNumber) => async (dispatch) => {
  const { data } = await axios.get(`${topRatedMovieURL}&page=${pageNumber}`);
  dispatch({
    type: "FETCH_TOP_RATED",
    payload: data.results,
  });
};
export const getUpcomingMovies = (pageNumber) => async (dispatch) => {
  const { data } = await axios.get(`${upcomingMovieURL}&page=${pageNumber}`);
  dispatch({
    type: "FETCH_UPCOMING",
    payload: data.results,
  });
};

export const searchMovie = (searchKey, pageNumber) => async (dispatch) => {
  const { data } = await axios.get(
    `${searchMovieURL}${searchKey}&page=${pageNumber}`
  );
  dispatch({
    type: "FETCH_SEARCH",
    payload: data.results,
  });
};
