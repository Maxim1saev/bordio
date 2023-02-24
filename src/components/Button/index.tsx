import { FC, MouseEvent, ReactNode } from "react";
import { ButtonComponent } from "./styled";
import { IColorButton } from "./types";

interface ButtonProps {
  maxWidth?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  variant?: IColorButton;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  maxWidth = true,
  children,
  variant = "blue",
  className,
  ...restProps
}: ButtonProps) => (
  <ButtonComponent
    maxWidth={maxWidth}
    variant={variant}
    className={className}
    {...restProps}
  >
    {children}
  </ButtonComponent>
);
