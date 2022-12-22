import { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";

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
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error: any) => {
        console.log("error", error);
      });
  }, []);

  return (
    <Container>
      <HeaderBoard />

      <TasksBoard data={data} />
    </Container>
  );
};
