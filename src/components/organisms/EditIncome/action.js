export const editIncome = (item) => async (dispatch) => {
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
