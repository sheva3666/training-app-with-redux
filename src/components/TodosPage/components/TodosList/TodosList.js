import React, { useState } from "react";
import { List, StandardListItem, Button } from "@ui5/webcomponents-react";
import StatusSelect from "../../../common/StatusSelect/StatusSelect";
import { STATUSES } from "../../constants";

import useStyles from "./styles";

const TodosList = ({ todos, getTodosLoading }) => {
  const [currentStatus, setCurrentStatus] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.todosList}>
      {getTodosLoading ? (
        <p>Loading...</p>
      ) : (
        <List headerText="List of todos from">
          {todos?.map((todo) => (
            <StandardListItem
              icon="employee"
              additionalText="info"
              className={classes.listItem}
            >
              {todo.title}
              <StatusSelect
                options={STATUSES}
                onChange={setCurrentStatus}
                value={currentStatus}
              />
              <Button icon="employee" onClick={function noRefCheck() {}}>
                Button Text
              </Button>
            </StandardListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default TodosList;
