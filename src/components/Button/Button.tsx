import * as React from "react";
import styled from "styled-components";
import { borderRadius, Shape, TextStyle, padding, Size } from "./interfaces";

export interface Props {
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

  const FilledButton = styled.button`
    /* Shape Styling */
    border: none;
    border-radius: ${borderRadius(shape)}px;
    padding: ${padding(size)};
    margin: 1rem;

    /* Color & Font */
    font-family: inherit;
    background: ${color};
    color: ${textColor};
    font-size: 1.1em;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: ${textStyle};
    white-space: nowrap;

    transition: 150ms;

    &:hover:enabled {
      cursor: pointer;
      transform: translate(0px, -2px);
      box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
      opacity: 0.3;
    }
  `;

  const OutlinedButton = styled(FilledButton)`
    padding: calc(1rem - 2px) calc(2rem - 2px);
    background: rgba(250, 250, 250, 0);
    border: 2px solid ${color};
  `;

  return (
    <>
      {!filled ? (
        <OutlinedButton
          className={className}
          style={style}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </OutlinedButton>
      ) : (
        <FilledButton
          className={className}
          style={style}
          disabled={disabled}
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
};

export { Button };
