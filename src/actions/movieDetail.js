import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_TMDB_URL;
const movieByIdURL = `${URL}/movie/`;

export const getMovieDetail = (movieId) => async (dispatch) => {
  const { data } = await axios.get(
    `${movieByIdURL}${movieId}?api_key=${API_KEY}`
  );
  dispatch({ type: "GET_DETAIL", payload: data });
};
