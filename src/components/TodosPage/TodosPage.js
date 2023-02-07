import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const TodosPage = ({ isAuth }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate(ROUTES.home);
    }
  }, []);

  return <div>TodosPage</div>;
};

export default TodosPage;
