import { useStyles } from "./styles";

export type StyleOptions =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "display-1"
  | "display-2"
  | "display-3"
  | "display-4";

export type VariantType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export const styleDef = (styleAs: StyleOptions | undefined) => {
  const classes = useStyles();
  switch (styleAs) {
    case "h1":
      console.log(classes.h1);
      return classes.h1;
      break;
    default:
      return null;
      break;
  }
};
