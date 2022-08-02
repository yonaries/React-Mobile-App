import axios from "axios";
const API_KEY = "dc4abdd12b06e1a27b45f8678c0a1a7a";
const URL = `https://api.themoviedb.org/3`;
const movieByIdURL = `${URL}/movie/`;

export const getMovieDetail = (movieId) => async (dispatch) => {
  const { data } = await axios.get(
    `${movieByIdURL}${movieId}?api_key=${API_KEY}`
  );
  dispatch({ type: "GET_DETAIL", payload: data });
};

// https://api.themoviedb.org/3/movie/438148?api_key=dc4abdd12b06e1a27b45f8678c0a1a7a
