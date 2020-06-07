import * as React from "react";
import { useStyles } from "components/Surface/styles";
import { CSSProperties } from "@material-ui/styles";

interface Props {
  /**
   * Uses defaultDark class from predefined styles.
   */
  defaultDark?: boolean;
  /**
   * Inline CSS styling
   */
  style?: CSSProperties;
}

const Surface = (props: Props) => {
  const styles = useStyles();
  return (
    <div
      className={props.defaultDark ? styles.defaultDark : styles.default}
      style={props.style}
    ></div>
  );
};

export { Surface };
