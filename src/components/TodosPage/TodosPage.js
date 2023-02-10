import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../redux/api/todosAPI";
import TodosForm from "./components/TodosForm/TodosForm";
import TodosList from "./components/TodosList/TodosList";
import useStyles from "./styles";

const TodosPage = ({ isAuth }) => {
  const { todos, getTodosLoading, getTodosError } = useSelector(
    (state) => state.todos
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    if (!isAuth) {
      navigate(ROUTES.home);
    }
  }, []);

  useEffect(() => {
    getTodos(dispatch);
  }, []);

  return (
    <div className={classes.todosPageContainer}>
      <TodosForm />
      <TodosList
        todos={todos}
        getTodosLoading={getTodosLoading}
        getTodosError={getTodosError}
      />
    </div>
  );
};

export default TodosPage;
