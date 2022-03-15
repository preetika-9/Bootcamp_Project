import { createIncome, UpdateIncome } from "./api";
export const incomeAdded = (data) => ({ type: "Add_Income", payload: data });
export const incomeEdited = (data) => ({ type: "Edit_Income", payload: data });

export function saveIncome(payload) {
  return async function saveIncomeThunk(dispatch) {
    const response = await createIncome(payload);
    console.log(response);
    dispatch(
      incomeAdded({
        ...response.data,
      })
    );
  };
}

export function EditIncome(id, payload) {
  return async function IncomeEdit(dispatch) {
    const response = await UpdateIncome(id, payload);
    console.log(response);
    dispatch(
      incomeEdited({
        ...response.data,
      })
    );
  };
}
