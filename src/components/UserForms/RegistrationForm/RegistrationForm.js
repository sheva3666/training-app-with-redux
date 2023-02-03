import React from "react";
import { SubmitButton } from "../../common/Button/Button";

const RegistrationForm = () => {
  const addUser = () => {};
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <SubmitButton onClick={addUser} name="Register" />
    </form>
  );
};

export default RegistrationForm;
