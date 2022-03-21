const initialState = {
  response: [],
  userAuthenticate: !!localStorage.getItem("token"),
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
      return {
        ...state,
        isFetching: false,
        isError: false,
        response: action.payload,
        userAuthenticate: true,
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
