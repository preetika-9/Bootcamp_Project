const initialState = {
  response: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_FETCHING_ATTEMPT":
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case "LIST_FETCHING_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isError: false,
        response: action.payload,
      };
    case "LIST_FETCHING_ERROR":
      return {
        ...state,
        isFetching: false,
        isError: true,
      };

    case "Add_Income": {
      const data = action.payload;
      return {
        ...state,
        response: [...state.response.incomes, data],
      };
    }

    case "income/incomeDeleted":
      return {
        ...state,
        response: {
          incomes: state.response.incomes.filter(
            (item) => Number(item.id) !== Number(action.payload)
          ),
        },
      };

    case "Add_Expense": {
      const data = action.payload;
      return {
        ...state,
        response: [...state.response.expenses, data],
      };
    }

    case "expense/expenseDeleted":
      return {
        ...state,
        response: {
          expenses: state.response.expenses.filter(
            (item) => Number(item.id) !== Number(action.payload)
          ),
        },
      };

    default:
      return state;
  }
};

export default listReducer;
