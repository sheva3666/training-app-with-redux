import {
  GET_AUTH_ERROR,
  GET_AUTH_SUCCESS,
  GET_AUTH_START,
  CREATE_AUTH_START,
  CREATE_AUTH_SUCCESS,
  CREATE_AUTH_ERROR,
  DELETE_AUTH_START,
  DELETE_AUTH_SUCCESS,
  DELETE_AUTH_ERROR,
} from "../actions/authActions";

const initialState = {
  getAuthLoading: false,
  authUser: [],
  auth: false,
  getAuthError: false,
  createAuthLoading: false,
  createAuthError: null,
  createAuthSuccess: "",
  deleteAuthLoading: false,
  deleteAuthError: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_AUTH_START:
      return {
        ...state,
        getAuthLoading: true,
      };
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        getUserLoading: false,
        getUserError: null,
        authUser: payload,
        auth: true,
      };
    case GET_AUTH_ERROR:
      return {
        ...state,
        getAuthLoading: false,
        getAuthError: true,
      };
    case CREATE_AUTH_START:
      return {
        ...state,
        createAuthLoading: true,
      };
    case CREATE_AUTH_SUCCESS:
      return {
        ...state,
        createAuthLoading: false,
        createAuthError: null,
        createAuthSuccess: payload,
        auth: true,
      };
    case CREATE_AUTH_ERROR:
      return {
        ...state,
        createAuthLoading: false,
        createAuthError: payload,
      };
    case DELETE_AUTH_START:
      return {
        ...state,
        deleteAuthLoading: true,
      };
    case DELETE_AUTH_SUCCESS:
      return {
        ...state,
        deleteAuthLoading: false,
        deleteAuthError: null,
        auth: false,
      };
    case DELETE_AUTH_ERROR:
      return {
        ...state,
        deleteAuthLoading: false,
        deleteAuthError: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
