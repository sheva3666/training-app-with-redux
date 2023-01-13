import {
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  GET_TODOS_START,
} from "../actions/todosActions";

const initialState = {
  getTodosLoading: false,
  count: 0,
  totalPages: 0,
  todos: [],
  getTodosError: null,
  updateTodoLoading: false,
  updateTodoError: false,
  deleteTodoLoading: false,
  deleteTodoError: false,
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_START:
      return {
        ...state,
        getTodosLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        getTodosLoading: false,
        getTodosError: null,
        todos: payload,
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        getTodosLoading: false,
        getTodosError: true,
      };
    default:
      return state;
  }
};

export default todosReducer;
