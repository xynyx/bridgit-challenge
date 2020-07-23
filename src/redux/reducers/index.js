import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import filterReducer from "./filterReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  items: itemReducer,
  filters: filterReducer,
  errors: errorReducer,
});
