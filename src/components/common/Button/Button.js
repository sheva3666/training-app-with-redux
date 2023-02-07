import React from "react";
import useStyles from "./styles";

export const SubmitButton = ({ onClick, name }) => {
  const classes = useStyles();
  return (
    <button type="submit" className={classes.submitButton} onClick={onClick}>
      {name}
    </button>
  );
};

export const LinkButton = ({ onClick, name }) => {
  const classes = useStyles();
  return (
    <button className={classes.linkButton} onClick={onClick}>
      {name}
    </button>
  );
};

export const BigButton = ({ onClick, name }) => {
  const classes = useStyles();
  return (
    <button className={classes.bigButton} onClick={onClick}>
      {name}
    </button>
  );
};

export const Button = ({ onClick, name }) => {
  const classes = useStyles();
  return (
    <button className={classes.button} onClick={onClick}>
      {name}
    </button>
  );
};
