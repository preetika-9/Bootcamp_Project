import axios from "../../../utils/axios";

import { deleteExpense } from "../AddExpenses/api";
import { deleteIncome } from "../addIncome/api";

export const incomeDeleted = (incomeId) => ({
  type: "income/incomeDeleted",
  payload: incomeId,
});

export const listIncomeAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LIST_FETCHING_ATTEMPT" });

    const { data } = await axios.get("/api/income");

    dispatch({ type: "LIST_FETCHING_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "LIST_FETCHING_ERROR", payload: error });
  }
};

export const removeIncome = (id) => async (dispatch) => {
  try {
    const response = await deleteIncome(id);

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
    dispatch({ type: "LIST_FETCHING_ATTEMPT" });

    const { data } = await axios.get("/api/expense");
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
