import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  homePageContainer: {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  title: {
    fontSize: "50px",
  },
  buttons: {
    display: "flex",
    gap: 30,
  },
}));
