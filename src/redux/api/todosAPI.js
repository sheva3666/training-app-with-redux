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
  dispatch(createTodoStart());

  await axios
    .post(`${apiUrl}/todos`, newTodo)
    .then((data) => dispatch(createTodoSuccess(data)))
    .catch((error) => dispatch(createTodoError(error.response.data.message)));
  getTodos(dispatch);
};

export const updateTodo = async (id, updatedTodo, dispatch) => {
  dispatch(updateTodoStart());

  const { data } = await axios
    .put(`${apiUrl}/todos/${id}`, updatedTodo)
    .catch((response) => console.log(response));
  dispatch(updateTodoSuccess(data));
};

export const deleteTodo = async (id, dispatch) => {
  dispatch(deleteTodoStart());

  await axios
    .delete(`${apiUrl}/todos/${id}`)
    .then(dispatch(deleteTodoSuccess(id)))
    .catch((response) => dispatch(deleteTodoError(response.data)));
  getTodos(dispatch);
};
