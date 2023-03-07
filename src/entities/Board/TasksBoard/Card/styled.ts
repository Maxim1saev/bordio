import styled from "styled-components";

export const TaskTitle = styled.span`
  display: block;
  margin-bottom: 2px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.black};
`;

export const TaskDuration = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme }) => theme.palette.green};
`;

export const Container = styled.div<{ isCurrent: boolean; background: string }>`
  min-height: 70px;
  margin-bottom: 10px;
  padding: 15px;

  border-radius: 8px;
  font-weight: bold;
  background-color: ${({ background }) => background};
  opacity: ${({ isCurrent }) => isCurrent && 0.3};

  &:first-of-type {
    margin-top: 40px;
  }
`;
