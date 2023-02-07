import {
  getUserError,
  getUserStart,
  getUserSuccess,
  createUserError,
  createUserStart,
  createUserSuccess,
} from "../actions/userActions";
import axios from "axios";
import { apiUrl } from "../../utils/constants";

export const getUser = async (dispatch, email, password) => {
  dispatch(getUserStart());

  await axios
    .get(`${apiUrl}/users/${email}/${password}`)
    .then((data) => dispatch(getUserSuccess(data)))
    .catch((error) => dispatch(getUserError(error)));
};

export const createUser = async (dispatch, newUser) => {
  dispatch(createUserStart());

  const { data } = await axios
    .post(`${apiUrl}/users`, newUser)
    .catch((error) => createUserError(error));
  dispatch(createUserSuccess(data));
};
