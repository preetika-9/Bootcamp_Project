const initialState = {
  response: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_FETCHING_ATTEMPT":
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case "LIST_FETCHING_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isError: false,
        response: action.payload,
      };
    case "LIST_FETCHING_ERROR":
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default listReducer;
