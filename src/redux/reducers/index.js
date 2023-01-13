import { combineReducers } from "redux";
import todosReducer from "./todoosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
