import axios from "axios";

export const registerAction = (payload) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_FETCHING_ATTEMPT" });
    const { data } = await axios.post(
      "http://localhost:3005/api/auth/register",
      payload
    );
    dispatch({ type: "REGISTER_FETCHING_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "REGISTER_FETCHING_ERROR", payload: error });
  }
};
