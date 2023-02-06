import React from "react";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return <h2 className={classes.header}>Header</h2>;
};

export default Header;
