import { createExpense } from "./api";

export const expenseAdded = (data) => ({ type: "Add_Expense", payload: data });

export function saveExpense(payload) {
  return async function saveExpenseThunk(dispatch) {
    const response = await createExpense(payload);
    dispatch(
      expenseAdded({
        ...response.data,
      })
    );
  };
}
