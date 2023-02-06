import React from "react";
import { ROUTES } from "./constants";
import { useNavigate, Route } from "react-router-dom";

export const OpenRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

export const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...props} /> : navigate(ROUTES.home)
      }
    />
  );
};
