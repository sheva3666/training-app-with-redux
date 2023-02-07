import React from "react";
import { BigButton } from "../common/Button/Button";
import useStyles from "./styles";

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.homePageContainer}>
      <h2 className={classes.title}>Welcome to our Todo app</h2>
      <div className={classes.buttons}>
        <BigButton name="Todos" />
        <BigButton name="Login" />
      </div>
    </div>
  );
};

export default HomePage;
