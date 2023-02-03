import {
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_START,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "../actions/userActions";

const initialState = {
  getUsersLoading: false,
  user: [],
  getUserError: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_START:
      return {
        ...state,
        getTodosLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        getTodosLoading: false,
        getTodosError: null,
        todos: payload,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        getTodosLoading: false,
        getTodosError: true,
      };
    case CREATE_USER_START:
      return {
        ...state,
        createTodoLoading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        createTodoLoading: false,
        createTodoError: null,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        createTodoLoading: false,
        createTodoError: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
