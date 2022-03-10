import { combineReducers } from "redux";
import incomeReducer from "../components/organisms/addIncome/reducer";
import listReducer from "../components/organisms/ListPage/reducer";
import registerReducer from "../components/organisms/Register/reducer";

const rootReducer = combineReducers({
  register: registerReducer,
  incomeList: listReducer,
  expenseList: listReducer,
  incomeReducer: incomeReducer,
});

export default rootReducer;
