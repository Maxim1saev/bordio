import styled, { css } from "styled-components";

type IColorButton = "blue" | "white";

const ButtonComponent = styled.button<{ variant?: IColorButton }>`
  width: 100%;
  min-height: 50px;
  height: 38px;
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
          border: 1px solid ${({ theme }) => theme.palette.gray5};

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
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  variant?: IColorButton;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "blue",
  className,
  ...restProps
}: ButtonProps) => (
  <ButtonComponent variant={variant} className={className} {...restProps}>
    {children}
  </ButtonComponent>
);
