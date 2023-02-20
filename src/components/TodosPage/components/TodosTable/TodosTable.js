import React from "react";
import StatusSelect from "../../../common/StatusSelect/StatusSelect";
import TableSortable from "../../../common/Table/TableSortable";
import { compact } from "lodash";
import { useDispatch } from "react-redux";

import { Text } from "@ui5/webcomponents-react";
import { updateTodo } from "../../../../redux/api/todosAPI";

const onChangeStatus = (id, title, value, dispatch) => {
  const currentUser = localStorage.getItem("email");
  const updatedTodo = {
    userId: currentUser,
    title: title,
    status: value,
  };

  updateTodo(id, updatedTodo, dispatch);
};

const createTableHeader = ({ dispatch }) =>
  compact([
    {
      name: "Name",
      id: "name",
      cellRenderer: ({ title }) => <Text>{title}</Text>,
    },
    {
      name: "Status",
      id: "status",
      cellRenderer: ({ id, title, status }) => {
        return (
          <StatusSelect
            onChange={(e) =>
              onChangeStatus(id, title, e.detail.selectedOption.value, dispatch)
            }
            name={status}
          />
        );
      },
    },
  ]);

const TodosTable = ({ todos }) => {
  const dispatch = useDispatch();
  const tableHeader = createTableHeader({ dispatch });

  return (
    <div style={{ width: "500px" }}>
      <TableSortable tableData={todos} tableHeader={tableHeader} />
    </div>
  );
};

export default TodosTable;
