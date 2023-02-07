import React, { useState } from "react";
import Form from "../../common/Form/Form";
import { SubmitButton } from "../../common/Button/Button";
import { useDispatch } from "react-redux";
import { EmailInput, PasswordInput } from "../../common/Inputs/Inputs";
import { getUser } from "../../../redux/api/userAPI";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";

const LoginForm = () => {
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (loginUser) => {
    getUser(dispatch, loginUser.email, loginUser.password);
    localStorage.setItem("email", loginUser.email);
    navigate(ROUTES.todos);
  };

  return (
    <Form>
      <EmailInput
        label="Email"
        placeholder="Email"
        value={loginUser.email}
        onChange={(value) => setLoginUser({ ...loginUser, email: value })}
      />
      <PasswordInput
        label="Password"
        placeholder="Password"
        value={loginUser.password}
        onChange={(value) => setLoginUser({ ...loginUser, password: value })}
      />
      <SubmitButton onClick={() => onLogin(loginUser)} name={"Login"} />
    </Form>
  );
};

export default LoginForm;
