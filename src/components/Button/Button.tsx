import * as React from "react";
import styled from "styled-components";

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
   * Whether or not the button is disabled
   * @default false
   */
  disabled?: boolean;
}

const Button = (props: Props) => {
  const { children, className, disabled } = props;

  const FilledButton = styled.button`
    /* Shape Styling */
    border: none;
    border-radius: 5px;
    padding: 1rem 1.3rem;
    margin: 1rem;

    /* Color & Font */
    font-family: inherit;
    background: #000;
    color: #fff;
    font-size: 1.1em;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
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

  return (
    <FilledButton className={className} disabled={disabled}>
      {children}
    </FilledButton>
  );
};

Button.defaultProps = {};

export { Button };
