import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTypedSelector, useActions } from "../../../hooks";

import { useAuth } from "../../../useAuth";

import { Card } from "./Card";

import { Container, Grid, Column, ColumnTitle, HeadGrid } from "./styled";
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

export const TasksBoard = ({ setData }: { setData: any }) => {
  const drugItem = useRef<{ groupIndex: number; itemIndex: number } | null>();
  const drugNode = useRef<any>();

  const indexes = useRef<number[]>();

  const { tasks } = useTypedSelector((state) => state.tasks);

  const { dataBase, auth, user, setUser } = useAuth();

  // const query = collection(dataBase, "oses"); получу корневую коллекцию
  const query = collection(dataBase, `users/${user.uid}/column`);
  const [list, setList] = useState<any[]>(tasks);

  // const [docsData] = useDocumentData(documents);

  const editTasks = async (column: string) => {
    const documents = doc(dataBase, `users/${user.uid}/column/${column}`);
    await setDoc(
      documents,
      list.find(({ title }) => title === column)
    );
  };

  const [docs, loading, error] = useCollectionData(query);

  useEffect(() => {
    docs?.length && setList(docs);
  }, [docs]);

  const [dragging, setDragging] = useState(false);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    groupIndex: number,
    itemIndex: number
  ) => {
    drugItem.current = { groupIndex, itemIndex };
    drugNode.current = event.target;

    drugNode.current.addEventListener("dragend", () =>
      handleDragEnd(groupIndex)
    );

    setTimeout(setDragging, 0, true);
  };

  const handleDragEnd = async (groupIndex: number) => {
    setDragging(false);

    const currentItem = drugItem.current;

    if (groupIndex !== currentItem!.groupIndex) {
      editTasks(list[groupIndex].title);
      editTasks(list[currentItem!.groupIndex].title);
    }

    editTasks(list[groupIndex].title);

    drugNode.current.removeEventListener("dragend", handleDragEnd);

    drugItem.current = null;
    drugNode.current = null;

    if (!list.length) return;
  };

  const handleDragEnter = (
    event: React.DragEvent<HTMLDivElement>,
    groupIndex: number,
    itemIndex: number
  ) => {
    if (!dragging) return;

    const currentItem = drugItem.current;

    if (event.target !== drugNode.current) {
      setList((prevValue) => {
        const newList = [...prevValue];

        newList[groupIndex]?.tasks?.splice(
          itemIndex,
          0,
          newList[currentItem!.groupIndex]?.tasks?.splice(
            currentItem?.itemIndex,
            1
          )[0]
        );

        drugItem.current = { groupIndex, itemIndex };
        return newList;
      });
    }
  };

  return (
    <Container>
      <HeadGrid length={list?.length}>
        {list?.map((group: any) => (
          <ColumnTitle key={group.id}>{group.title}</ColumnTitle>
        ))}
      </HeadGrid>

      <Grid length={list?.length}>
        {list?.map((group: any, groupIndex) => (
          <Column
            key={group.id}
            onDragEnter={
              dragging && !group.tasks?.length
                ? (event) => handleDragEnter(event, groupIndex, 0)
                : undefined
            }
          >
            {group.tasks?.map((item: any, itemIndex: number) => (
              <Card
                key={item}
                handleDragEnter={(event: React.DragEvent<HTMLDivElement>) =>
                  handleDragEnter(event, groupIndex, itemIndex)
                }
                handleDragStart={(event: React.DragEvent<HTMLDivElement>) =>
                  handleDragStart(event, groupIndex, itemIndex)
                }
                isCurrent={
                  dragging &&
                  drugItem.current?.groupIndex === groupIndex &&
                  drugItem.current?.itemIndex === itemIndex
                }
                item={item}
                groupIndex={0}
                itemIndex={0}
              />
            ))}
          </Column>
        ))}
      </Grid>
    </Container>
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
