import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h2>Todos</h2>
      <div className={classes.navigation}>
        <NavLink className={classes.link} to="/register">
          Home
        </NavLink>
        <NavLink className={classes.link} to="/todos">
          Todos
        </NavLink>
        <NavLink className={classes.link} to="/login">
          Login
        </NavLink>
        <NavLink className={classes.link} to="/register">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
