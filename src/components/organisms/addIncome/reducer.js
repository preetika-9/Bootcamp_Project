const initialState = {
  status: "idle",
  incomes: [],
};

export default function incomeReducer(state = initialState, action) {
  switch (action.type) {
    case "Add_Income": {
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
