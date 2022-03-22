import axios from "axios";
import { errorConsole } from "utils/helper";
import { deleteExpense } from "../AddExpenses/api";
import { deleteIncome } from "../addIncome/api";

export const incomeDeleted = (incomeId) => ({
  type: "income/incomeDeleted",
  payload: incomeId,
});

export const listIncomeAction = () => async (dispatch) => {
  try {
    //const token = localStorage.getItem("token");
    dispatch({ type: "LIST_FETCHING_ATTEMPT" });

    const { data } = await axios.get(
      "http://localhost:3005/api/income",

      {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiYWRkcmVzcyI6IkxhbGl0cHVyLCBOZXBhbCIsInBob25lIjoiOTg0MTEyMzEyMyIsImVtYWlsIjoiYWRtaW5AZ3VyenUuY29tIiwiYWN0aXZlIjoxLCJkYXRlX29mX2JpcnRoIjoiMjAyMi0wMy0wMlQyMDo1OToyOC4xMTFaIiwiaWF0IjoxNjQ2NzM2MzY5LCJleHAiOjE2NDY4MjI3Njl9.BTdrEKy1LD6hfRu0UM2yOxz-sht1ux-3n-UrLWQJmBM",
        },
      }
    );
    dispatch({ type: "LIST_FETCHING_SUCCESS", payload: data });
  } catch (error) {
    console.log("saurab");
    errorConsole(error);
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

//expenses
export const expenseDeleted = (expenseId) => ({
  type: "expense/expenseDeleted",
  payload: expenseId,
});

export const listExpenseAction = () => async (dispatch) => {
  try {
    //const token = localStorage.getItem("token");
    dispatch({ type: "LIST_FETCHING_ATTEMPT" });

    const { data } = await axios.get(
      "http://localhost:3005/api/expense",

      {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiYWRkcmVzcyI6IkxhbGl0cHVyLCBOZXBhbCIsInBob25lIjoiOTg0MTEyMzEyMyIsImVtYWlsIjoiYWRtaW5AZ3VyenUuY29tIiwiYWN0aXZlIjoxLCJkYXRlX29mX2JpcnRoIjoiMjAyMi0wMy0wMlQyMDo1OToyOC4xMTFaIiwiaWF0IjoxNjQ2NzM2MzY5LCJleHAiOjE2NDY4MjI3Njl9.BTdrEKy1LD6hfRu0UM2yOxz-sht1ux-3n-UrLWQJmBM",
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
      payload: response.expense,
    });
  } catch (error) {
    dispatch({ type: "LIST_FETCHING_ERROR", payload: error });
  }
};
