import React from "react";
import { StyledButton, Container } from "./styles";
import { ReactNode, MouseEventHandler } from "react";
import Spinner from "../../Spinner";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  type,
  disabled,
  isLoading,
}) => {
  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledButton
          color={color}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {children}
        </StyledButton>
      )}
    </Container>
  );
};

export default Button;
