import React, { FC } from "react";

import { TaskTitle, TaskDuration, Container } from "./styled";

import { useAuth } from "../../../../hooks/useAuth";

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
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

import {
  useDocumentDataOnce,
  useDocumentData,
} from "react-firebase-hooks/firestore";

interface CardProps {
  item: any;
  column: string;
  currentProject: string;
  isCurrent: boolean;
  groupIndex: number;
  itemIndex: number;
  handleDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
}

export const Card: FC<CardProps> = ({
  item,
  column,
  isCurrent,
  currentProject,
  handleDragStart,
  handleDragEnter,
}) => {
  const { dataBase, user } = useAuth();

  const documents = doc(
    dataBase,
    `users/${user.uid}/projects/${currentProject}/columns/${column}`
  );

  const [data] = useDocumentData(documents);

  const deleteColumn = async () => {
    await setDoc(documents, {
      ...data,
      tasks: data?.tasks.filter((listItem: any) => listItem.id !== item.id),
    });
  };

  return (
    <Container
      key={item.id}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      draggable
      background={item.color}
      isCurrent={isCurrent}
    >
      <TaskTitle>{item.title}</TaskTitle>
      <TaskDuration>{item.duration}</TaskDuration>

      <button onClick={deleteColumn} style={{ marginLeft: "100px" }}>
        X
      </button>
    </Container>
  );
};
