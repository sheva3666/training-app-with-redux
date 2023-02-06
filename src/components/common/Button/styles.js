import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  submitButton: {
    padding: "10px 15px",
    borderRadius: "10px",
    border: 0,
    background: "blue",
    color: "#fff",
    cursor: "pointer",
  },

  linkButton: {
    padding: "10px 5px",
    border: 0,
    background: "none",
    color: "blue",
    cursor: "pointer",
  },
}));
