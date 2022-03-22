import axios from "../../utils/axios";
import { apiUrl } from "../../utils";
const LoginAction = (payload) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_FETCHING_ATTEMPT" });

    const { data } = await axios.post(`${apiUrl}/api/auth`, payload);
    localStorage.setItem("token", data.token);

    dispatch({ type: "LOGIN_FETCHING_SUCCESS", payload: data });
    return data;
  } catch (error) {
    dispatch({ type: "LOGIN_FETCHING_ERROR", payload: error });
    return error;
  }
};

export default LoginAction;
