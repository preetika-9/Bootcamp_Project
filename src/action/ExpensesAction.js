import {
  fetchExpenses,
  createExpenses,
  updateExpenses,
  deleteExpenses,
} from "../components/ExpensesComponent/api";

export const expensesAdded = (expenses) => ({
  type: "expenses/expensesAdded",
  payload: expenses,
});

export const expensesUpdated = (payload) => ({
  type: "expenses/expensesUpdated",
  payload: payload,
});

export const expensesLoading = () => ({ type: "expenses/expensesLoading" });

export const expensesLoaded = (expenses) => ({
  type: "expenses/expensesLoaded",
  payload: expenses,
});

export const expensesDeleted = (expensesId) => ({
  type: "expenses/expensesDeleted",
  payload: expensesId,
});

export const handleFetchExpenses = () => async (dispatch) => {
  dispatch(expensesLoading());
  const response = await fetchExpenses();
  dispatch(
    expensesLoaded(
      response?.expenses.map((item) => ({
        ...item,
        completed: !!item.completed,
      })) || []
    )
  );
};

export function saveNewExpenses(payload) {
  return async function saveNewExpensesThunk(dispatch) {
    const response = await createExpenses(payload);
    dispatch(
      expensesAdded({
        ...response.expenses,
        completed: !!response.todo.completed,
      })
    );
  };
}

export function updateOldExpenses(payload) {
  return async function (dispatch) {
    const response = await updateExpenses(payload);
    console.log({
      ...response.expenses,
      completed: !!response.todo.completed,
    });

    dispatch(
      expensesUpdated({
        ...response.expenses,
        completed: !!response.expenses.completed,
      })
    );
  };
}

export function removeExpenses(id) {
  return async function (dispatch) {
    const response = await deleteExpenses(id);
    dispatch(expensesDeleted(response.expenses));
  };
}
