import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "blue",
    color: "#fff",
  },
  navigation: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  link: {
    color: "#fff",
  },
}));
