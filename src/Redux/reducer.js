import AddExpenses from "components/organisms/AddExpenses/reducer";

import { LoginReducer } from "reducer";
import { combineReducers } from "redux";
import incomeReducer from "../components/organisms/addIncome/reducer";
import listReducer from "../components/organisms/ListPage/reducer";
import registerReducer from "../components/organisms/Register/reducer";

const rootReducer = combineReducers({
  register: registerReducer,
  incomeList: listReducer,
  expenseList: listReducer,
  incomeReducer: incomeReducer,

  login: LoginReducer,
  //expenses: expensesReduceer,
  expensesReducer: AddExpenses,
});

export default rootReducer;
