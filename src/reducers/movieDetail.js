const initState = {
  movie: {},
  isLoading: true,
};

const movieDetail = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        movie: action.payload,
        isLoading: false,
      };
    default:
      return { ...state, isLoading: true };
  }
};

export default movieDetail;
