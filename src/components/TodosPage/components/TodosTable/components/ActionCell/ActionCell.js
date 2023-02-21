import React from "react";
import { Button } from "@ui5/webcomponents-react";
import { deleteTodo } from "../../../../../../redux/api/todosAPI";
import { useDispatch } from "react-redux";

const ActionCell = ({ todo, onChangeMode, editMode, updatedTodoName }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => deleteTodo(todo.id, dispatch)}>Delete</Button>
    </>
  );
};

export default ActionCell;
