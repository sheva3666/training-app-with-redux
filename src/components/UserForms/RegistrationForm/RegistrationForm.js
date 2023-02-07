import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../../common/Form/Form";
import { SubmitButton } from "../../common/Button/Button";
import {
  EmailInput,
  PasswordInput,
  TextInput,
} from "../../common/Inputs/Inputs";
import { createUser } from "../../../redux/api/userAPI";
import { useSelector } from "react-redux";

const RegistrationForm = () => {
  const { createUserSuccess, createUserLoading, createUserError } = useSelector(
    (state) => state.auth
  );

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

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

    console.log("wcwecwec");
    setNewUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <Form>
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
      <SubmitButton
        onClick={addUser}
        name={createUserLoading ? "Loading..." : "Register"}
      />

      {createUserSuccess && <p>{createUserSuccess}</p>}
      {createUserError && <p>{createUserError}</p>}
    </Form>
  );
};

export default RegistrationForm;
