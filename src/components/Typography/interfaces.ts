import { useStyles } from "./styles";

export type StyleOptions =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "display1"
  | "display2";

export type VariantType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
export type CaseType = "uppercase" | "lowercase" | "capitalize";

export const styleDef = (styleAs: StyleOptions | undefined) => {
  const classes = useStyles();
  switch (styleAs) {
    case "h1":
      return classes.h1;
      break;
    case "h2":
      return classes.h2;
      break;
    case "h3":
      return classes.h3;
      break;
    case "h4":
      return classes.h4;
      break;
    case "h5":
      return classes.h5;
      break;
    case "h6":
      return classes.h6;
      break;
    case "display1":
      return classes.display1;
      break;
    case "display2":
      return classes.display2;
      break;
    default:
      return null;
      break;
  }
};
