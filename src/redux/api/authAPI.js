import {
  getAuthError,
  getAuthStart,
  getAuthSuccess,
  createAuthError,
  createAuthStart,
  createAuthSuccess,
  deleteAuthError,
  deleteAuthStart,
  deleteAuthSuccess,
} from "../actions/authActions";
import axios from "axios";
import { apiUrl } from "../../utils/constants";

export const getAuth = async (dispatch, id) => {
  dispatch(getAuthStart());

  const { data } = await axios
    .get(`${apiUrl}/auth/${id}`)
    .catch((error) => dispatch(getAuthError(error)));
  dispatch(getAuthSuccess(data));
};

export const createAUTH = async (dispatch, newUser) => {
  dispatch(createAuthStart());

  const { data } = await axios
    .post(`${apiUrl}/auth`, newUser)
    .catch((error) => createAuthError(error));
  dispatch(createAuthSuccess(data));
};

export const createAuth = async (dispatch, id) => {
  dispatch(deleteAuthStart());

  const { data } = await axios
    .delete(`${apiUrl}/auth/${id}`)
    .catch((error) => deleteAuthError(error));
  dispatch(deleteAuthSuccess());
};
