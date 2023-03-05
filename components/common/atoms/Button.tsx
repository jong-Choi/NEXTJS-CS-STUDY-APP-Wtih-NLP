import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  color?:
    | "primary"
    | "secondary"
    | "orange"
    | "purple"
    | "teal"
    | "red"
    | "green"
    | "blue";
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  label: string;
  value?: any;
  style?: {};
  onClick?: (e) => void;
}

export const Button = ({
  color = "primary",
  size = "medium",
  disabled = false,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = disabled ? "storybook-button--disabled" : "";
  return (
    <StyledButton>
      <button
        type="button"
        className={[
          "storybook-button",
          `storybook-button--${size}`,
          `storybook-button--${color}`,
          mode,
        ].join(" ")}
        style={{ backgroundColor }}
        disabled={disabled}
        {...props}
      >
        {label.length > 100 ? label.slice(0, 15) + "..." : label}
      </button>
    </StyledButton>
  );
};

export const StyledButton = styled.span`
  .storybook-button {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    min-width: 4rem;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  .storybook-button--primary {
    color: white;
    background-color: #1ea7fd;
  }
  .storybook-button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  .storybook-button--orange {
    color: rgba(255, 148, 46, 1);
    background-color: rgba(255, 148, 46, 0.05);
    box-shadow: rgba(255, 148, 46, 1) 0px 0px 0px 1px inset;
  }
  .storybook-button--purple {
    color: rgba(79, 63, 240, 1);
    background-color: rgba(79, 63, 240, 0.05);
    box-shadow: rgba(79, 63, 240, 1) 0px 0px 0px 1px inset;
  }
  .storybook-button--teal {
    color: rgba(9, 108, 134, 1);
    background-color: rgba(9, 108, 134, 0.05);
    box-shadow: rgba(9, 108, 134, 1) 0px 0px 0px 1px inset;
  }
  .storybook-button--red {
    color: rgba(223, 54, 112, 1);
    background-color: rgba(223, 54, 112, 0.05);
    box-shadow: rgba(223, 54, 112, 1) 0px 0px 0px 1px inset;
  }
  .storybook-button--green {
    color: rgba(52, 196, 113, 1);
    background-color: rgba(52, 196, 113, 0.05);
    box-shadow: rgba(52, 196, 113, 1) 0px 0px 0px 1px inset;
  }
  .storybook-button--blue {
    color: rgba(64, 103, 249, 1);
    background-color: rgba(64, 103, 249, 0.05);
    box-shadow: rgba(64, 103, 249, 1) 0px 0px 0px 1px inset;
  }
  .storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
  .storybook-button--disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
