import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SubmitButton } from "../../common/Button/Button";
import {
  EmailInput,
  PasswordInput,
  TextInput,
} from "../../common/Inputs/Inputs";
import { createUser } from "../../../redux/api/userAPI";
import useStyles from "./styles";

const RegistrationForm = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const onChangeName = (value) => {
    setNewUser({ ...newUser, name: value });
  };
  const onChangeEmail = (value) => {
    setNewUser({ ...newUser, email: value });
  };
  const onChangePassword = (value) => {
    setNewUser({ ...newUser, password: value });
  };

  const addUser = async (e) => {
    e.preventDefault();
    createUser(dispatch, newUser);

    // dispatch(createUser(dispatch, newUser));
    console.log("wcwecwec");
    setNewUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form className={classes.form}>
      <TextInput
        value={newUser.name}
        onChange={onChangeName}
        placeholder="Full name"
        label="Full name"
      />
      <EmailInput
        value={newUser.email}
        onChange={onChangeEmail}
        placeholder="Email"
        label="Email"
      />
      <PasswordInput
        value={newUser.password}
        onChange={onChangePassword}
        placeholder="Password"
        label="Password"
      />

      <SubmitButton onClick={addUser} name="Register" />
    </form>
  );
};

export default RegistrationForm;
