import styled from "styled-components";
import { Avatar } from "../../../components";

export const Container = styled.div`
  position: fixed;
  left: 226px;
  right: 0;
  top: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  box-shadow: 0px 2px 4px #f0f1f2;
`;

export const AvatarStyled = styled(Avatar)`
  width: 40px;
  height: 40px;
`;

export const Side = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const AddNewButton = styled.button`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 8px 20px;

  border-radius: 50px;
  box-shadow: 0px 2px 4px #f0f1f2;
  background: ${({ theme }) => theme.palette.blue1};

  svg path {
    fill: ${({ theme }) => theme.palette.white};
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.palette.white};
  }
`;
