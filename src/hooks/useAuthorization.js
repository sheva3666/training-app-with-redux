import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAuth } from "../redux/api/authAPI";
import { getUser } from "../redux/api/userAPI";

const useCheckUser = () => {
  const { user } = useSelector((state) => state.user);
  const [email] = user;

  const dispatch = useDispatch();

  const checkUser = (loginUser) => {
    getUser(dispatch, loginUser.email, loginUser.password);
  };

  return { checkUser, email };
};

const useAuthorization = () => {
  const { checkUser, email } = useCheckUser();
  const inLogin = (loginUser) => {
    checkUser(loginUser);
    createAuth(email);
  };
  return inLogin;
};

export default useAuthorization;
