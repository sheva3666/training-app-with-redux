import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../common/Button/Button";
import { deleteAuth } from "../../redux/api/authAPI";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import useStyles from "./styles";

const Header = ({ isAuth, authUser, dispatch }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  console.log(authUser);

  const onLogout = () => {
    localStorage.removeItem("email");
    deleteAuth(dispatch, authUser);
    navigate(ROUTES.home);
  };
  return (
    <div className={classes.header}>
      <h2>Todos</h2>
      <div className={classes.navigation}>
        <NavLink className={classes.link} to="/">
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
        {isAuth && <Button name="Logout" onClick={onLogout} />}
      </div>
    </div>
  );
};

export default Header;
