import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTypedSelector, useActions } from "../../../hooks";
import styled from "styled-components";
import { useAuth } from "../../../useAuth";

import { Card } from "./Card";

import { Container, Grid, Column, ColumnTitle, HeadGrid } from "./styled";
import { ReactComponent as AddTaskIcon } from "../../public/icons/AddTaskIcon.svg";
import { Modal } from "../../../components/Modal";

import { v4 as uuidv4 } from "uuid";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
  setDoc,
  doc,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";

import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

const AddNewButton = styled.button`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 8px 20px;

  border-radius: 50px;
  box-shadow: 0px 2px 4px #f0f1f2;
  background: ${({ theme }) => theme.palette.blue1};

  svg path {
    fill: ${({ theme }) => theme.palette.white};
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.palette.white};
  }
`;

const Circle = styled.button<{ color: string }>`
  height: 30px;
  width: 30px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

export const CreateCard = ({
  open,
  onClose,
  title,
  currentProject,
}: {
  open: boolean;
  onClose: any;
  currentProject: any;
  title?: any | undefined;
}) => {
  const [text, setText] = useState<string>();
  const [duration, setDuration] = useState<string>();
  const [color, setColor] = useState<string>();

  const { dataBase, auth, user, setUser } = useAuth();

  const documents = doc(
    dataBase,
    `users/${user.uid}/projects/${currentProject}/columns/${title}`
  );

  const [docsData] = useDocumentData(documents);

  const addTask = async () => {
    const tasksNew = Array.isArray(docsData?.tasks) ? docsData?.tasks : [];

    await setDoc(documents, {
      ...docsData,
      tasks: [
        ...tasksNew!,
        {
          id: uuidv4(),
          color: color || getRandomColor(),
          title: text,
          duration,
        },
      ],
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <input
        style={{ border: "1px solid" }}
        value={text}
        placeholder="TEXT"
        onChange={(event: any) => setText(event.target.value)}
        type="text"
      />
      <input
        style={{ border: "1px solid" }}
        value={duration}
        placeholder="DURATION"
        onChange={(event: any) => setDuration(event.target.value)}
        type="text"
      />

      {COLORS.map((color) => (
        <Circle onClick={() => setColor(color)} color={color} />
      ))}

      <AddNewButton onClick={addTask}>
        <span>CREATE TASK</span>
      </AddNewButton>
    </Modal>
  );
};

const COLORS = [
  " #B7E1FE",
  "#BFF2FC",
  "#A4D7DB",
  "#ABE9CE",
  "#CEF8C9",
  "#D9E6A2",
  "#FEC6B7",
  "#FFDFBA",
  "#F2BAE1",
  "#D8DCFF",
];
const getRandomColor = () =>
  COLORS[Math.abs(Math.round(Math.random() * COLORS.length) - 1)];
