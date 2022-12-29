import { useState, useEffect } from "react";
import styled from "styled-components";

import { TasksBoard } from "./TasksBoard";
import { HeaderBoard } from "./HeaderBoard";

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const Board = () => {
  const [data, setData] = useState();
  return (
    <Container>
      <HeaderBoard data={data} />

      <TasksBoard setData={setData} />
    </Container>
  );
};
