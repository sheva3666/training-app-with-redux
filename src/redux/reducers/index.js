import { combineReducers } from "redux";
import todosReducer from "./todoosReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
});

export default rootReducer;
