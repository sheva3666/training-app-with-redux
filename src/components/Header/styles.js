import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  input: {
    padding: "10px 15px",
    borderRadius: "10px",
    border: "1px solid #000",
    mAXWidth: 400,
  },
}));
