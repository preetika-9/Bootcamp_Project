const initialState = {
  response: [],
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_FETCHING_ATTEMPT":
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case "REGISTER_FETCHING_SUCCESS":
      alert("Succussfully Register");
      return {
        ...state,
        isFetching: false,
        isError: false,
        response: action.payload,
      };
    case "REGISTER_FETCHING_ERROR":
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default registerReducer;
