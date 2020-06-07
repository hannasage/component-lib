import * as React from "react";
import { useStyles } from "components/Surface/styles";
import { CSSProperties } from "@material-ui/styles";

interface Props {
  /**
   * Custom class styling through CSS
   */
  className?: string;
  /**
   * Uses defaultDark class from predefined styles.
   */
  darkMode?: boolean;
  /**
   * Inline CSS styling
   */
  style?: CSSProperties;
}

const Surface = (props: Props) => {
  const styles = useStyles();
  const { className, darkMode, style } = props;
  return (
    <div
      className={
        darkMode ? styles.defaultDark : className ? className : styles.default
      }
      style={style}
    ></div>
  );
};

export { Surface };
