import { combineReducers } from "redux";
import listReducer from "../components/organisms/ListPage/reducer";
import registerReducer from "../components/organisms/Register/reducer";

const rootReducer = combineReducers({
  register: registerReducer,
  incomeList: listReducer,
  expenseList: listReducer,
});

export default rootReducer;
