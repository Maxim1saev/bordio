import styled, { css } from "styled-components";

type IColorButton = "blue" | "white";

const ButtonComponent = styled.button<{
  maxWidth: boolean;
  variant?: IColorButton;
}>`
  width: ${({ maxWidth }) => maxWidth && "100%"};
  height: 38px;
  padding: 0px 15px;
  height: 38px;
  min-width: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;

  font-size: 16px;
  font-family: Roboto, sans-serif !important;
  border-radius: 4px;
  cursor: pointer;

  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.blue1};
  transition: background 0.3s ease-out 0s;

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }

  ${({ variant }) =>
    variant === "white"
      ? css`
          /* border: 1px solid ${({ theme }) => theme.palette.gray5}; */

          font-weight: 400;
          font-size: 14px;
          color: ${({ theme }) => theme.palette.black};

          background: ${({ theme }) => theme.palette.white};

          transition: background 0.3s ease-out 0s;

          &:hover {
            background: ${({ theme }) => theme.palette.gray5};
          }
        `
      : css`
          &:hover {
            background: ${({ theme }) => theme.palette.blue4};
          }
        `}
`;

interface ButtonProps {
  maxWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  variant?: IColorButton;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
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
