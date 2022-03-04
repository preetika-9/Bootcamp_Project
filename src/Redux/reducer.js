import { combineReducers } from "redux";
import registerReducer from "../components/organisms/Register/reducer";

const rootReducer = combineReducers({
  register: registerReducer,
});

export default rootReducer;
