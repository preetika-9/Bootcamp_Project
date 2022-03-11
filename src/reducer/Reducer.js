import { combineReducers } from "redux";
import AddExpenses from "../components/organisms/AddExpenses/AddExpenses";
import expensesReducer from "../components/organisms/ListPage/ExpensesListReducer";
import { LoginReducer } from "./LoginReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  expenses: expensesReducer,
  expensesReducer: AddExpenses,
});

export default rootReducer;
