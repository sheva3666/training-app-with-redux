import React from "react";
import useStyles from "./styles";

const Form = ({ children }) => {
  const classes = useStyles();
  return <form className={classes.form}>{children}</form>;
};

export default Form;
