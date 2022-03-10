import axios from "axios";
import { deleteIncome } from "../addIncome/api";


export const incomeDeleted = (incomeId) => ({
  type: "income/incomeDeleted",
  payload: incomeId,
});

export const listIncomeAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    dispatch({ type: "LIST_FETCHING_ATTEMPT" });

    const { data } = await axios.get(
      "http://localhost:3005/api/income",

      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({ type: "LIST_FETCHING_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "LIST_FETCHING_ERROR", payload: error });
  }
};

export const listExpenseAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    dispatch({ type: "LIST_FETCHING_ATTEMPT" });

    const { data } = await axios.get(
      "http://localhost:3005/api/expense",

      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({ type: "LIST_FETCHING_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "LIST_FETCHING_ERROR", payload: error });
  }
};

export const removeIncome = (id) => async (dispatch) => {
  try {
    const response = await deleteIncome(id);
    console.log(response.income, "response id");
    dispatch({
      type: "income/incomeDeleted",
      payload: response.income,
    });
  } catch (error) {
    dispatch({ type: "LIST_FETCHING_ERROR", payload: error });
  }
};

// export function removeIncome(id) {
//   return async function (dispatch, getState) {
//     console.log(id, "delete id");
//     const response = await deleteIncome(id);
//     console.log(response.income, "response id");
//     dispatch({
//       type: "income/incomeDeleted",
//       payload: response.income,
//     });
//   };
// }
