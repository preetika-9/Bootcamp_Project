const initialState = {
  response: [],
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_FETCHING_ATTEMPT":
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case "LOGIN_FETCHING_SUCCESS":
      alert("Succussfully Login");
      return {
        ...state,
        isFetching: false,
        isError: false,
        response: action.payload,
      };
    case "LOGIN_FETCHING_ERROR":
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default LoginReducer;
