import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  default: {
    margin: ".5rem",
    padding: ".5rem",
    background: "#fff",
    borderRadius: "8px",
    width: "200px",
    height: "200px",
    boxShadow: "-2px 2px 5px 2px rgba(0, 0, 0, 0.07)",
  },
  defaultDark: {
    margin: ".5rem",
    padding: ".5rem",
    background: "#26333f",
    borderRadius: "8px",
    width: "200px",
    height: "200px",
    boxShadow: "-2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
  },
});

export { useStyles };
