import { apiUrl } from "../../utils";

export const expensesAdded = (data) => ({
  type: "Add_Expenses, payload: data",
});

export function saveExpenses(payload) {
  return async function saveExpensesThunk(dispatch) {
    const Response = await axios.post(`${apiUrl}/api/expenses`, payload);
    dispatch(
      expensesAdded({
        ...Response.data,
      })
    );
  };
}
