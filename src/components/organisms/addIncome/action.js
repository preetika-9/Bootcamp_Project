import { createIncome } from "./api";

export const incomeAdded = (data) => ({ type: "Add_Income", payload: data });

export function saveIncome(payload) {
  return async function saveIncomeThunk(dispatch) {
    const response = await createIncome(payload);
    dispatch(
      incomeAdded({
        ...response.data,
      })
    );
  };
}
