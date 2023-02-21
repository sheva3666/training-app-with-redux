import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../redux/api/todosAPI";
import TodosForm from "./components/TodosForm/TodosForm";
import TodosTable from "./components/TodosTable/TodosTable";
import useStyles from "./styles";

const TodosPage = ({ isAuth }) => {
  const { todos, getTodosLoading } = useSelector((state) => state.todos);
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
      {getTodosLoading ? <h2>Loading...</h2> : <TodosTable todos={todos} />}
    </div>
  );
};

export default TodosPage;
