import {
  getAuthError,
  getAuthStart,
  getAuthSuccess,
  deleteAuthError,
  deleteAuthStart,
  deleteAuthSuccess,
} from "../actions/authActions";
import axios from "axios";
import { apiUrl } from "../../utils/constants";

export const getAuth = async (dispatch, id) => {
  dispatch(getAuthStart());

  await axios
    .get(`${apiUrl}/auth/${id}`)
    .then((response) => dispatch(getAuthSuccess(response.data)))
    .catch((error) => dispatch(getAuthError(error)));
};

export const deleteAuth = async (dispatch, authUser) => {
  dispatch(deleteAuthStart());
  await axios
    .delete(`${apiUrl}/auth/${authUser}`)
    .catch((error) => deleteAuthError(error));
  dispatch(deleteAuthSuccess());
};
