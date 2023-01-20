import styled from "styled-components";

import { Avatar } from "../../../../components";

export const UserBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 16px;

  cursor: pointer;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: all 0.2s;

  svg {
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.palette.white};
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const AvatarStyled = styled(Avatar)`
  width: 100%;
  height: 100%;
`;

export const AvatarWrapper = styled.div<{ showIcon: boolean }>`
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;

  border-radius: 50%;

  ${({ showIcon }) =>
    showIcon &&
    `
   ${IconContainer} {
      opacity: 1;
      background: rgba(0, 0, 0, 0.5);
    }`}

  &:hover {
    ${IconContainer} {
      opacity: 1;
    }
  }
`;
