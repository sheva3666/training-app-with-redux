import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  todosForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  formContainer: {
    display: "flex",
    gap: "15px",
  },
}));
