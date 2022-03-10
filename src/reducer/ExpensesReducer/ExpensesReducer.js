const initialState = {
  status: "idle",
  incomes: [],
};

export default function expensesReducer(state = initialState, action) {
  switch (action.type) {
    case "Add_Expense": {
      const data = action.payload;
      return {
        ...state,
        incomes: [...state.incomes, data],
      };
    }
    default:
      return state;
  }
}
