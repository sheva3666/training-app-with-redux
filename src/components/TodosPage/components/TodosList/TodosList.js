import React from "react";
import {
  List,
  StandardListItem,
  Select,
  Option,
} from "@ui5/webcomponents-react";
import { STATUSES } from "../../constants";

import useStyles from "./styles";

const TodosList = ({ todos, getTodosLoading }) => {
  const classes = useStyles();

  return (
    <div className={classes.todosList}>
      {getTodosLoading ? (
        <p>Loading...</p>
      ) : (
        <List headerText="List of todos from">
          {todos?.map((todo) => (
            <StandardListItem
              growing="None"
              icon="employee"
              image=""
              mode="None"
              separators="All"
            >
              {todo.title}
              <Select onChange={function noRefCheck() {}}>
                {STATUSES.map((status) => (
                  <Option>{status}</Option>
                ))}
              </Select>
            </StandardListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default TodosList;
