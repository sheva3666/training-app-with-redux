import React, { useState } from "react";
import Form from "../../common/Form/Form";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { EmailInput, PasswordInput } from "../../common/Inputs/Inputs";
import { getUser } from "../../../redux/api/userAPI";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import useStyles from "./styles";

const LoginForm = () => {
  const { getUserLoading, getUserError } = useSelector((state) => state.user);
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const isAuth = () => {
    if (!getUserLoading && !getUserError) {
      localStorage.setItem("email", loginUser.email);
      navigate(ROUTES.todos);
    }
  };

  const onLogin = (loginUser) => {
    getUser(dispatch, loginUser.email, loginUser.password).then(isAuth());
  };

  return (
    <div className={classes.formContainer}>
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
        {getUserLoading ? (
          <p>Loading...</p>
        ) : (
          <SubmitButton onClick={() => onLogin(loginUser)} name={"Login"} />
        )}
      </Form>
      {getUserError && <p>{getUserError}</p>}
      <p>
        Whether you don't have account yet, please{" "}
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginForm;
