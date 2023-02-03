import React from "react";
import useStyles from "./styles";

export const EmailInput = ({ onChange, placeholder, label, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel}>{label}</label>
      <input
        required
        value={value}
        className={classes.input}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type="email"
      />
    </div>
  );
};

export const PasswordInput = ({ onChange, placeholder, label, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel}>{label}</label>
      <input
        required
        value={value}
        className={classes.input}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type="password"
      />
    </div>
  );
};

export const TextInput = ({ onChange, placeholder, label, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel}>{label}</label>
      <input
        required
        value={value}
        className={classes.input}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};
