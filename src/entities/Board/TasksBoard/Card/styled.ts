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
  margin-bottom: 10px;
  min-height: 70px;
  background-color: ${({ isCurrent, background }) =>
    isCurrent ? "#282c34" : background};
  border-radius: 5px;
  color: #282c34;
  font-weight: bold;

  padding: 15px;

  transition: all 0.2s;

  border-radius: 8px;

  &:first-of-type {
    margin-top: 40px;
  }
`;
