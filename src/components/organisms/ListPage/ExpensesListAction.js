import axios from "axios";
import { deleteExpense } from "../AddExpenses/api";

export const expenseDeleted = (expenseId) => ({
  type: "expense/expenseDeleted",
  payload: expenseId,
});

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

export const removeExpense = (id) => async (dispatch) => {
  try {
    const response = await deleteExpense(id);
    console.log(response.expense, "response id");
    dispatch({
      type: "expense/expenseDeleted",
      payload: response.expenses,
    });
  } catch (error) {
    dispatch({ type: "LIST_FETCHING_ERROR", payload: error });
  }
};
