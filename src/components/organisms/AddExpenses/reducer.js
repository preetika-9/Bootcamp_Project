const initialState = {
  status: "idle",
  incomes: [],
};

export default function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case "Add_Expense": {
      const data = action.payload;
      return {
        ...state,
        expenses: [...state.expenses, data],
      };
    }

    case "expense/expenseDeleted":
      return {
        ...state,
        expenses: state.expenses.filter(
          (item) => Number(item.id) !== Number(action.payload)
        ),
      };
    default:
      return state;
  }
}
