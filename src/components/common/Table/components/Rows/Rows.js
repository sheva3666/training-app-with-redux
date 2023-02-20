import { TableRow, TableCell, Label } from "@ui5/webcomponents-react";

const Rows = ({ rowData, tableHeader }) => (
  <TableRow>
    {tableHeader.map(({ id, cellRenderer }) => (
      <TableCell
        style={{ width: "100%", padding: "15px" }}
        key={`${rowData.id}-${id}`}
      >
        <Label>{cellRenderer(rowData)}</Label>
      </TableCell>
    ))}
  </TableRow>
);

export default Rows;
