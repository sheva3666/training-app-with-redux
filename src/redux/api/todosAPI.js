import {
  getTodosError,
  getTodosStart,
  getTodosSuccess,
} from "../actions/todosActions";
import axios from "axios";
import { apiUrl } from "../../utils/constants";

export const getTodos = async (dispatch) => {
  dispatch(getTodosStart());

  const { data } = await axios
    .get(`${apiUrl}/todos`)
    .catch((error) => dispatch(getTodosError(error)));
  dispatch(getTodosSuccess(data));
};
