import * as React from "react";
import { StyleOptions, VariantType, styleDef } from "./interfaces";
import { useStyles } from "./styles";

interface Props {
  /**
   * Defines the HTML variant of typography
   * @default 'p'
   */
  variant?: VariantType;
  /**
   * Defines the CSS styling of typography
   * @default 'p'
   */
  styleAs?: StyleOptions;
  /**
   * Children to be rendered between Typography tags.
   */
  children?: React.ReactNode;
}

const Typography = (props: Props) => {
  const { variant, styleAs, children } = props;
  const classes = useStyles();

  return (
    <>
      {variant === "h1" ? (
        <h1 className={styleDef(styleAs) || classes.h1}>{children}</h1>
      ) : variant === "h2" ? (
        <h2 className={styleDef(styleAs) || classes.h2}>{children}</h2>
      ) : variant === "h3" ? (
        <h3 className={styleDef(styleAs) || classes.h3}>{children}</h3>
      ) : variant === "h4" ? (
        <h4 className={styleDef(styleAs) || classes.h4}>{children}</h4>
      ) : variant === "h5" ? (
        <h5 className={styleDef(styleAs) || classes.h5}>{children}</h5>
      ) : variant === "h6" ? (
        <h6 className={styleDef(styleAs) || classes.h6}>{children}</h6>
      ) : (
        <p className={styleDef(styleAs) || classes.p}>{children}</p>
      )}
    </>
  );
};

export { Typography };
