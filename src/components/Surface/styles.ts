import { makeStyles } from "@material-ui/styles";
import { Props } from "./Surface";

const useStyles = makeStyles({
  default: (props: Props) => ({
    margin: ".5rem",
    padding: ".5rem",
    background: "#fff",
    borderRadius: "8px",
    width: props.size ? props.size[0] : "200px",
    height: props.size ? props.size[1] : "200px",
    boxShadow: !props.elevation
      ? "-2px 2px 5px 2px rgba(0, 0, 0, 0.07)"
      : `-2px 2px 
    ${2.5 * props.elevation}px 
    ${props.elevation}px 
    rgba(0, 0, 0, 0.07)`,
  }),
  defaultDark: (props: Props) => ({
    margin: ".5rem",
    padding: ".5rem",
    background: "#26333f",
    borderRadius: "8px",
    width: props.size ? props.size[0] : "200px",
    height: props.size ? props.size[1] : "200px",
    boxShadow: !props.elevation
      ? "-2px 2px 5px 2px rgba(0, 0, 0, 0.25)"
      : `-2px 2px 
    ${2.5 * props.elevation}px 
    ${props.elevation}px 
    rgba(0, 0, 0, 0.25)`,
  }),
});

export { useStyles };
