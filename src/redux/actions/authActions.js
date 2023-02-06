export const GET_AUTH_START = "GET_AUTH_START";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_ERROR = "GET_AUTH_ERROR";
export const CREATE_AUTH_START = "CREATE_AUTH_START";
export const CREATE_AUTH_SUCCESS = "CREATE_AUTH_SUCCESS";
export const CREATE_AUTH_ERROR = "CREATE_AUTH_ERROR";
export const DELETE_AUTH_START = "DELETE_AUTH_START";
export const DELETE_AUTH_SUCCESS = "CDELETEAUTH_SUCCESS";
export const DELETE_AUTH_ERROR = "DELETE_AUTH_ERROR";

export const getAuthStart = () => {
  return {
    type: GET_AUTH_START,
  };
};

export const getAuthSuccess = (data) => {
  return {
    type: GET_AUTH_SUCCESS,
    payload: data,
  };
};

export const getAuthError = (error) => {
  return {
    type: GET_AUTH_ERROR,
    payload: error,
  };
};

export const createAuthStart = () => {
  return {
    type: CREATE_AUTH_START,
  };
};

export const createAuthSuccess = (authUser) => {
  return {
    type: CREATE_AUTH_SUCCESS,
    payload: authUser,
  };
};

export const createAuthError = (error) => {
  return {
    type: CREATE_AUTH_ERROR,
    payload: error,
  };
};

export const deleteAuthStart = () => {
  return {
    type: DELETE_AUTH_START,
  };
};

export const deleteAuthSuccess = (authUser) => {
  return {
    type: DELETE_AUTH_SUCCESS,
    payload: authUser,
  };
};

export const deleteAuthError = (error) => {
  return {
    type: DELETE_AUTH_ERROR,
    payload: error,
  };
};
