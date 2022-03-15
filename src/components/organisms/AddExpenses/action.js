import { createExpense, UpdateExpense } from "./api";

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

export function EditExpenses(payload) {
  return async function ExpenseEdit() {
    const response = await UpdateExpense(payload);
    console.log(response);
  };
}
