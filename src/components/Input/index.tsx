import React, { FC, useEffect, useState } from "react";

import {
  InputName,
  Container,
  InputError,
  InputComponent,
  ErrorIconStyled,
} from "./styled";

interface InputProps {
  placeholder?: string;
  error?: string | undefined | boolean;
  value: string | undefined;
  type: string;
  label?: string;
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
  label,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);

  useEffect(() => setFocus(true), []);

  return (
    <Container>
      {label && <InputName>{label}</InputName>}

      <InputComponent
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        {...rest}
      />

      <InputError isShow={!!error}>
        <ErrorIconStyled /> <span>{error}</span>
      </InputError>
    </Container>
  );
};
