import {
  createTodoError,
  createTodoStart,
  createTodoSuccess,
  deleteTodoError,
  deleteTodoStart,
  deleteTodoSuccess,
  getTodosError,
  getTodosStart,
  getTodosSuccess,
  updateTodoError,
  updateTodoStart,
  updateTodoSuccess,
} from "../actions/todosActions";
import axios from "axios";
import { apiUrl } from "../../utils/constants";

export const getTodos = async (dispatch) => {
  const user = localStorage.getItem("email");
  dispatch(getTodosStart());

  const { data } = await axios
    .get(`${apiUrl}/todos/${user}`)
    .catch((error) => dispatch(getTodosError(error)));
  dispatch(getTodosSuccess(data));
};

export const createTodo = async (newTodo, dispatch) => {
  console.log("create todo");
  dispatch(createTodoStart());

  await axios
    .post(`${apiUrl}/todos`, newTodo)
    .then((data) => dispatch(createTodoSuccess(data)))
    .catch((error) => dispatch(createTodoError(error.response.data.message)));
  getTodos(dispatch);
};

export const updateTodo =
  ({ id, key, value }) =>
  async (dispatch) => {
    dispatch(updateTodoStart());

    await axios
      .put(`${apiUrl}/todos/${id}/`, {
        [key]: value,
      })
      .then((data) => dispatch(updateTodoSuccess(data.updatedTodo)))
      .catch((response) => dispatch(updateTodoError(response.data)));
  };

export const deleteTodo = (id, queryObject) => async (dispatch) => {
  dispatch(deleteTodoStart());

  await axios
    .delete(`${apiUrl}/todos/${id}/`)
    .then(dispatch(deleteTodoSuccess(id)))
    .then(dispatch(getTodos(queryObject)))
    .catch((response) => dispatch(deleteTodoError(response.data)));
};
