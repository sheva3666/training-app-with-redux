import { combineReducers } from "redux";
import todosReducer from "./todoosReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
