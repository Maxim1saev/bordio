import styled, { keyframes } from "styled-components";

import { ReactComponent as AddTaskIcon } from "../../../assets/AddTaskIcon.svg";

const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  overflow: auto;
  margin-top: 80px;
`;

export const Grid = styled.div<Props>`
  height: calc(100% - 80px);
  display: flex;
  width: ${({ length }) => length * 300}px;
  overflow-x: auto;
`;

export const HeadGrid = styled.div<Props>`
  display: flex;
  width: ${({ length }) => length * 300}px;
  position: sticky;
  top: 0px;
  background: ${({ theme }) => theme.palette.white};
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray};
`;

interface Props {
  length: number;
}

export const ColumnTitle = styled.div`
  width: 300px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.black};
`;

export const AddTaskIconStyled = styled(AddTaskIcon)`
  width: 40px;
  height: 40px;
  display: block;
  margin: 0 auto;

  opacity: 0;
  cursor: pointer;
  transition: all 0.2s;
  fill: ${({ theme }) => theme.palette.blue};

  &:hover {
    fill: ${({ theme }) => theme.palette.blue1};
  }
`;

export const Column = styled.div`
  width: 300px;
  padding: 0 10px;
  overflow-y: auto;

  transition: all 0.1;

  border-right: 1px solid ${({ theme }) => theme.palette.gray};
`;

export const EmptySpace = styled.div`
  width: 100%;
  height: 100%;

  &:hover {
    ${AddTaskIconStyled} {
      animation: ${show} 0.2s linear forwards;
    }
  }
`;
