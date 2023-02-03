export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";

export const getUserStart = () => {
  return {
    type: GET_USER_START,
  };
};

export const getUserSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

export const getUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    payload: error,
  };
};

export const createUserStart = () => ({
  type: CREATE_USER_START,
});

export const createUserSuccess = (newUser) => ({
  type: CREATE_USER_SUCCESS,
  payload: newUser,
});

export const createUserError = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error,
});
