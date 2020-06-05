import * as React from "react";
import { StyleOptions, VariantType, styleDef } from "./interfaces";
import { useStyles } from "./styles";
import { CSSProperties } from "@material-ui/styles";

interface Props {
  /**
   * Custom class names for CSS styling
   */
  className?: string;
  /**
   * Inline styling through React CSSProperties
   */
  style?: CSSProperties;
  /**
   * Defines the CSS styling of typography
   * @default <p>
   */
  styleAs?: StyleOptions;
  /**
   * Defines the HTML variant of typography
   * @default <p>
   */
  variant?: VariantType;
  /**
   * Children to be rendered between Typography tags.
   */
  children?: React.ReactNode;
}

const Typography = (props: Props) => {
  const { className, variant, style, styleAs, children } = props;
  const classes = useStyles();

  return (
    <>
      {variant === "h1" ? (
        <h1
          className={className || styleDef(styleAs) || classes.h1}
          style={style}
        >
          {children}
        </h1>
      ) : variant === "h2" ? (
        <h2
          className={className || styleDef(styleAs) || classes.h2}
          style={style}
        >
          {children}
        </h2>
      ) : variant === "h3" ? (
        <h3
          className={className || styleDef(styleAs) || classes.h3}
          style={style}
        >
          {children}
        </h3>
      ) : variant === "h4" ? (
        <h4
          className={className || styleDef(styleAs) || classes.h4}
          style={style}
        >
          {children}
        </h4>
      ) : variant === "h5" ? (
        <h5
          className={className || styleDef(styleAs) || classes.h5}
          style={style}
        >
          {children}
        </h5>
      ) : variant === "h6" ? (
        <h6
          className={className || styleDef(styleAs) || classes.h6}
          style={style}
        >
          {children}
        </h6>
      ) : (
        <p
          className={className || styleDef(styleAs) || classes.p}
          style={style}
        >
          {children}
        </p>
      )}
    </>
  );
};

export { Typography };
