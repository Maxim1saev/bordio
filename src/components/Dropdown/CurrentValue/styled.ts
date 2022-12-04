import styled from "styled-components";

import { Arrow } from "../../Arrow";

export const ArrowStyled = styled(Arrow)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};

  path {
    fill: ${({ theme }) => theme.palette.gray4};
  }
`;

export const Value = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Container = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px 8px 20px;
  gap: 8px;

  border-radius: 50px;
  background: ${({ isOpen, theme }) =>
    isOpen ? theme.palette.gray5 : theme.palette.gray1};
`;
