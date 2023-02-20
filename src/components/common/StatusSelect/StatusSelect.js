import React from "react";
import { Select, Option } from "@ui5/webcomponents-react";
import { STATUSES } from "../../TodosPage/constants";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

const StatusSelect = ({ onChange, name }) => {
  return (
    <Select onChange={onChange}>
      {STATUSES.map((option) => (
        <Option
          selected={name === option.value}
          value={option.value}
          key={option.name}
        >
          {option.name}
        </Option>
      ))}
    </Select>
  );
};

export default StatusSelect;
