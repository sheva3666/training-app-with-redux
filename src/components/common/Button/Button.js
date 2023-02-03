import React from "react";
import useStyles from "./styles";

export const SubmitButton = ({ onClick, name }) => {
  const classes = useStyles();
  return (
    <button className={classes.submitButton} onClick={onClick}>
      {name}
    </button>
  );
};
