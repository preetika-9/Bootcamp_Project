import axios from "../../../utils/axios";
import { deleteUser, UpdateUser } from "./api";

export const userEdited = (data) => ({ type: "Edit_User", payload: data });

export const registerAction = () => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_FETCHING_ATTEMPT" });
    const { data } = await axios.get("/api/users");
    console.log(data);
    dispatch({ type: "REGISTER_FETCHING_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "REGISTER_FETCHING_ERROR", payload: error });
  }
};

export function editUser(id, payload) {
  return async function userEdit(dispatch) {
    const response = await UpdateUser(id, payload);
    console.log(response);
    dispatch(
      userEdited({
        ...response.data,
      })
    );
  };
}

export const removeUser = (id) => async (dispatch) => {
  try {
    const response = await deleteUser(id);

    dispatch({
      type: "user/userDeleted",
      payload: response.user,
    });
  } catch (error) {
    dispatch({ type: "REGISTER_FETCHING_ERROR", payload: error });
  }
};
