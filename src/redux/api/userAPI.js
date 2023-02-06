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

export const getUser = async (dispatch, email) => {
  dispatch(getUserStart());

  const { data } = await axios
    .get(`${apiUrl}/users/${email}`)
    .catch((error) => dispatch(getUserError(error)));
  dispatch(getUserSuccess(data));
};

export const createUser = async (dispatch, newUser) => {
  dispatch(createUserStart());

  const { data } = await axios
    .post(`${apiUrl}/users`, newUser)
    .catch((error) => createUserError(error));
  dispatch(createUserSuccess(data));
};
