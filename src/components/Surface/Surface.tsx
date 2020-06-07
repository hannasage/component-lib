import * as React from "react";
import { useStyles } from "components/Surface/styles";
import { CSSProperties } from "@material-ui/styles";

export interface Props {
  /**
   * Custom class styling through CSS
   */
  className?: string;
  /**
   * Uses defaultDark class from predefined styles.
   */
  darkMode?: boolean;
  /**
   * Takes propery as ["width", "height"]. Be sure to include units
   * such as px, rem, or %.
   *
   * If minWidth/minHeight or maxWidth/maxHeight are necessary, use the style prop
   * to add those values.
   */
  size?: [string, string];
  /**
   * Inline CSS styling
   */
  style?: CSSProperties;
  /**
   * Children to be rendered on Surface
   */
  children?: React.ReactNode;
}

const Surface = (props: Props) => {
  const styles = useStyles(props);
  const { className, darkMode, style, children } = props;
  return (
    <div
      className={
        darkMode ? styles.defaultDark : className ? className : styles.default
      }
      style={style}
    >
      {children}
    </div>
  );
};

export { Surface };
