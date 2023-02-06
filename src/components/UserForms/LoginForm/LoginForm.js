import React, { useState } from "react";
import Form from "../../common/Form/Form";
import { SubmitButton } from "../../common/Button/Button";
import { EmailInput, PasswordInput } from "../../common/Inputs/Inputs";

const LoginForm = () => {
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  return (
    <Form>
      <EmailInput
        value={loginUser.email}
        onChange={(value) => setLoginUser({ ...loginUser, email: value })}
      />
      <PasswordInput
        value={loginUser.password}
        onChange={(value) => setLoginUser({ ...loginUser, password: value })}
      />
      {/* <SubmitButton onClick={addUser} name={"Login"} /> */}
    </Form>
  );
};

export default LoginForm;
