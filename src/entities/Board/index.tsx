import React from "react";
import styled from "styled-components";
import { HeaderBoard } from "./HeaderBoard";
import { TasksBoard } from "./TasksBoard";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Board = ({}) => {
  return (
    <Container>
      <HeaderBoard />
      <TasksBoard />
    </Container>
  );
};
