import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  font-size: calc(10px + 2vmin);
`;

export const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, 300px);
  align-items: start;
  overflow: auto;
`;

export const HeadGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 300px);
  align-items: start;
`;

export const Column = styled.div`
  height: calc(100vh - 80px - 58px);
  min-height: 100px;
  padding: 0 10px;

  border-right: 1px solid ${({ theme }) => theme.palette.gray};

  &:first-of-type,
  :last-of-type {
    padding: 0 20px;
  }
`;

export const ColumnTitle = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.black};
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray};
`;
