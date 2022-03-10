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

    case "income/incomeDeleted":
      //console.log(action.payload, "delete console");
      return {
        ...state,
        incomes: state.incomes.filter(
          (item) => Number(item.id) !== Number(action.payload)
        ),
      };
    default:
      return state;
  }
}
