import React from "react";
import useStyles from "./styles";

const Form = ({ children, onSubmit }) => {
  const classes = useStyles();
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      {children}
    </form>
  );
};

export default Form;
