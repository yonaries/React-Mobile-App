import { combineReducers } from "redux";
import movies from "./movies";
import movieDetail from "./movieDetail";

export default combineReducers({
  movies,
  movieDetail,
});
