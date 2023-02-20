import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  todosList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },

  listItem: {
    minWidth: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
