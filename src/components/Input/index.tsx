import React, { FC } from "react";

import {
  InputName,
  Container,
  InputError,
  InputComponent,
  ErrorIconStyled,
} from "./styled";

interface InputProps {
  placeholder?: string;
  error?: string;
  value: string;
  type: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ReactElement;
}

export const Input: FC<InputProps> = ({
  Icon,
  placeholder,
  className,
  onChange,
  value,
  type,
  error,
  ...rest
}) => (
  <Container>
    <InputName>Last Name</InputName>

    <InputComponent
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      {...rest}
    />

    {error && (
      <InputError>
        <ErrorIconStyled /> <span>{error}</span>
      </InputError>
    )}
  </Container>
);
