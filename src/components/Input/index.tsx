import React, { FC } from "react";

import styled from "styled-components";

interface InputProps {
  placeholder?: string;
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
  ...rest
}) => (
  <InputComponent
    onChange={onChange}
    value={value}
    type={type}
    placeholder={placeholder}
    {...rest}
  />
);

const InputComponent = styled.input`
  width: 100%;
  min-height: 50px;
  margin-bottom: 16px;
  padding: 0px 18px;

  line-height: 50px;
  border-radius: 8px;
  border: 0px;
  background: rgb(238, 242, 245);
  font-size: 16px;
`;
