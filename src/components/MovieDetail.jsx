import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieDetail } from "../actions/movieDetail";

const MovieDetail = () => {
  const [isSafe, setIsSafe] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetail(params.id));
  }, [params.id, dispatch]);

  const { movie } = useSelector((state) => state.movieDetail);
  const imageURL = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`;

  useEffect(() => {
    checkImage(
      imageURL,
      function () {
        setIsSafe(true);
      },
      function () {
        setIsSafe(false);
      }
    );
  }, []);

  return (
    <Container
      initial={{ scale: "0%" }}
      animate={{ scale: "100%" }}
      transition={{
        type: "spring",
        duration: 1.5,
        bounce: 0.25,
      }}
    >
      {isSafe && <img src={imageURL} alt={movie.original_title} />}
      <h1>{movie.original_title}</h1>
      <p className="movie-overview">{movie.overview}</p>
      <div className="movie-description-item">
        <strong>Release date:</strong>
        <p>{movie.release_date}</p>
      </div>
      <div className="movie-description-item">
        <strong>Rating:</strong>
        <p>{movie.popularity}</p>
      </div>
    </Container>
  );
};

const Container = styled(motion.div)`
  img {
    width: 100%;
    /* height: 700px; */
    object-fit: cover;
    border-radius: 10px;
    margin: 3rem 0;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .movie-overview {
    margin-bottom: 2rem;
  }

  .movie-description-item {
    display: flex;
    margin-bottom: 0.5rem;

    strong {
      margin-right: 1rem;
    }
  }
`;

export default MovieDetail;
