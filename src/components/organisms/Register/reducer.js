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

    case "user/userDeleted":
      return {
        ...state,
        response: {
          users: state.response.users.filter(
            (item) => Number(item.id) !== Number(action.payload)
          ),
        },
      };
    default:
      return state;
  }
};

export default registerReducer;
