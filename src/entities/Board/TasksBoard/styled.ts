import styled from "styled-components";

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

export const Column = styled.div`
  width: 300px;
  padding: 0 10px;
  overflow-y: auto;

  border-right: 1px solid ${({ theme }) => theme.palette.gray};
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
