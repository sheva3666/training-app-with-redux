export const GET_TODOS_START = "GET_TODOS_START";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const getTodosStart = () => {
  return {
    type: GET_TODOS_START,
  };
};

export const getTodosSuccess = (data) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: data,
  };
};

export const getTodosError = (error) => {
  return {
    type: GET_TODOS_ERROR,
    payload: error,
  };
};
