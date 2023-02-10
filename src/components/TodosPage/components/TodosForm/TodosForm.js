import React, { useState } from "react";
import { Input, Button } from "@ui5/webcomponents-react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../../constants";
import { createTodo } from "../../../../redux/api/todosAPI";
import useStyles from "./styles";

const TodosForm = () => {
  const [newTodo, setNewTodo] = useState({
    userId: localStorage.getItem("email"),
    title: "",
    status: STATUSES[0],
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const onChangeTodo = (value) => {
    setNewTodo({ ...newTodo, title: value });
  };

  const addTodo = async () => {
    console.log(newTodo);
    createTodo(newTodo, dispatch).then(setNewTodo({ ...newTodo, title: "" }));
  };

  return (
    <div className={classes.todosForm}>
      <h2>New todo: </h2>
      <div className={classes.formContainer}>
        <Input
          onChange={(e) => onChangeTodo(e.target.value)}
          value={newTodo.title}
        />
        <Button onClick={addTodo}>Add todo</Button>
      </div>
    </div>
  );
};

export default TodosForm;
