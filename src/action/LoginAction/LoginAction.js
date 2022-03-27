import axios from "../../utils/axios";
const LoginAction = (payload) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_FETCHING_ATTEMPT" });

    const { data } = await axios.post(`/api/auth`, payload);
    console.log(data.token);
    localStorage.setItem("token", data.token);

    dispatch({ type: "LOGIN_FETCHING_SUCCESS", payload: data });

    return data;
  } catch (error) {
    dispatch({ type: "LOGIN_FETCHING_ERROR", payload: error });
    return error;
  }
};

export default LoginAction;
