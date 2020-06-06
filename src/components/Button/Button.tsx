import * as React from "react";
import styled from "styled-components";
import { borderRadius, Shape, TextStyle, padding, Size } from "./interfaces";
import { LightenDarkenColor } from "../../helpers/LigtenOrDarken.js";
interface Props {
  /**
   * Child element to be rendered
   */
  children?: React.ReactNode;
  /**
   * Class name for CSS-based styling
   */
  className?: string;
  /**
   * RGB, RGBA, or Hex value to apply as the color of the button
   */
  color?: string;
  /**
   * RGB, RGBA, or Hex value to apply as the text color
   */
  textColor?: string;
  /**
   * Whether or not the button is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether or not the button is filled in
   * @default true
   */
  filled?: boolean;
  /**
   * OnClick functionality of the button
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * The shape of the button
   * @default 'rounded'
   */
  shape?: Shape;
  /**
   * Indicates the size of the button (changed by CSS padding)
   * @default 'large'
   */
  size?: Size;
  /**
   * Inline styling with CSS
   */
  style?: React.CSSProperties;
  /**
   * Whether the text is as-typed, capitalized, lowercase, or uppercase
   * @default undefined
   */
  textStyle?: TextStyle;
}

const FilledButton = styled.button`
  /* Shape Styling */
  border: none;
  border-radius: ${(props: Props) => borderRadius(props.shape)}px;
  padding: ${(props: Props) => padding(props.size)};
  margin: 1rem;

  /* Color & Font */
  font-family: inherit;
  background: ${(props: Props) => props.color};
  color: ${(props: Props) => props.textColor};
  font-size: 1.1em;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: ${(props: Props) => props.textStyle};
  white-space: nowrap;

  background-position: center;
  transition: background 0.8s;

  &:hover:enabled {
    cursor: pointer;
    background: ${(props: Props) => LightenDarkenColor(props.color, -20)}
      radial-gradient(
        circle,
        transparent 1%,
        ${(props: Props) => LightenDarkenColor(props.color, -20)} 1%
      )
      center/15000%;
  }

  &:active:enabled {
    background-color: ${(props: Props) => props.color};
    background-size: 100%;
    transition: background 0s;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

const OutlinedButton = styled(FilledButton)`
  padding: calc(1rem - 2px) calc(2rem - 2px);
  background: rgba(250, 250, 250, 0);
  border: 2px solid ${(props: Props) => props.color};
`;

const Button = (props: Props) => {
  const {
    children,
    className,
    color,
    disabled,
    filled,
    onClick,
    shape,
    size,
    style,
    textColor,
    textStyle,
  } = props;

  return (
    <>
      {!filled ? (
        <OutlinedButton
          className={className}
          style={style}
          disabled={disabled}
          color={color}
          shape={shape}
          size={size}
          textColor={textColor}
          textStyle={textStyle}
          onClick={onClick}
        >
          {children}
        </OutlinedButton>
      ) : (
        <FilledButton
          className={className}
          style={style}
          disabled={disabled}
          color={color}
          shape={shape}
          size={size}
          textColor={textColor}
          textStyle={textStyle}
          onClick={onClick}
        >
          {children}
        </FilledButton>
      )}
    </>
  );
};

Button.defaultProps = {
  filled: true,
  color: "#dee8f7",
};

export { Button, FilledButton, OutlinedButton };
