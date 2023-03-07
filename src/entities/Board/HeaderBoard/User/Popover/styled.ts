import styled from "styled-components";

import { Button } from "../../../../../components";

import { ReactComponent as SettingsIcon } from "../../../../../assets/SettingsIcon.svg";
import { ReactComponent as PowerOffIcon } from "../../../../../assets/PowerOffIcon.svg";

import { Avatar } from "../../../../../components";

export const ButtonStyled = styled(Button)`
  margin-bottom: 8px;
`;

export const SettingsIconStyled = styled(SettingsIcon)`
  margin-right: 4px;

  fill: ${({ theme }) => theme.palette.gray3};
`;

export const LogoutIconStyled = styled(PowerOffIcon)`
  margin-right: 4px;

  fill: ${({ theme }) => theme.palette.gray3};
`;

export const Container = styled.div`
  max-width: 258px;
  min-width: 258px;
  position: absolute;
  right: 0;
  top: 100%;
  margin: 5px 0;
  padding: 0 8px 8px 8px;

  cursor: default;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: rgb(67 90 111 / 30%) 0px 0px 1px,
    rgb(67 90 111 / 47%) 0px 8px 10px -4px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 18px;

  span {
    font-size: 14px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const AvatarStyled = styled(Avatar)`
  width: 50px;
  height: 50px;
`;
