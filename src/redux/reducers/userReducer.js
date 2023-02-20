import {
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_START,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "../actions/userActions";

const initialState = {
  getUserLoading: false,
  user: [],
  authUser: null,
  getUserSuccess: false,
  getUserError: null,
  createUserLoading: false,
  createUserError: null,
  createUserSuccess: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_START:
      return {
        ...state,
        getUserLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        getUserLoading: false,
        getUserSuccess: true,
        getUserError: null,
        user: payload,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        getUserLoading: false,
        getUserSuccess: false,
        getUserError: payload,
      };
    case CREATE_USER_START:
      return {
        ...state,
        createUserLoading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        createUserLoading: false,
        createUserError: null,
        createUserSuccess: payload,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        createUserLoading: false,
        createUserError: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
