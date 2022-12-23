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

export const Board = () => (
  <Container>
    <HeaderBoard />

    <TasksBoard />
  </Container>
);
