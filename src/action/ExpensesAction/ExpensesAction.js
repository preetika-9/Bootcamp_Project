import { apiUrl } from "../../utils";
import axios from "axios";

export const expensesAdded = (data) => ({
  type: "Add_Expenses",
  payload: data,
});

export function saveExpenses(payload) {
  return async function saveExpensesThunk(dispatch) {
    const response = await axios.post(`${apiUrl}/api/expenses`, payload);
    dispatch(
      expensesAdded({
        ...response.data,
      })
    );
  };
}
