import React from "react";
import { Label, TableColumn, Table } from "@ui5/webcomponents-react";
import Rows from "./components/Rows/Rows";

const TableSortable = ({ tableData, tableHeader }) => {
  return (
    <Table
      columns={
        <>
          {tableHeader.map((cell) => (
            <TableColumn key={cell.id}>
              <Label>{cell.name}</Label>
            </TableColumn>
          ))}
        </>
      }
      onLoadMore={function noRefCheck() {}}
      onPopinChange={function noRefCheck() {}}
      onRowClick={function noRefCheck() {}}
      onSelectionChange={function noRefCheck() {}}
    >
      {tableData.map((rowData) => (
        <Rows key={rowData.id} tableHeader={tableHeader} rowData={rowData} />
      ))}
    </Table>
  );
};

export default TableSortable;
