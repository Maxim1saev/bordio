import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../assets/ErrorIcon.svg";

export const InputName = styled.label`
  display: block;
  margin-bottom: 4px;

  font-weight: 400;
  font-size: 13px;
  color: ${({ theme }) => theme.palette.gray3};
`;

export const ErrorIconStyled = styled(ErrorIcon)`
  width: 16px;
  height: 16px;

  fill: ${({ theme }) => theme.palette.red};
`;

export const Container = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const InputError = styled.div`
  position: absolute;
  top: 74px;
  display: flex;
  align-items: center;
  column-gap: 4px;

  span {
    height: 12px;
    font-size: 12px;
    color: ${({ theme }) => theme.palette.red};
  }
`;

export const InputComponent = styled.input`
  width: 100%;
  min-height: 50px;
  margin-bottom: 4px;
  padding: 0px 18px;

  border-radius: 8px;
  border: 0px;
  background: rgb(238, 242, 245);
  font-size: 16px;
`;
