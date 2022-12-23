import React, { useState, useRef, useEffect } from "react";
import { useTypedSelector, useActions } from "../../../hooks";

import axios from "axios";
import { Card } from "./Card";

import { Container, Grid, Column, ColumnTitle, HeadGrid } from "./styled";

export const TasksBoard = () => {
  const drugItem = useRef<{ groupIndex: number; itemIndex: number } | null>();
  const drugNode = useRef<any>();

  const { tasks } = useTypedSelector((state) => state.tasks);

  const { fetchTasks } = useActions();

  useEffect(() => {
    fetchTasks();
  }, []);

  const [list, setList] = useState<any[]>(tasks);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    setList(tasks);
  }, [tasks]);

  useEffect(() => {
    if (!dragging) {
      axios.post("http://localhost:5000/tasks", {
        list,
      });
    }
  }, [list]);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    groupIndex: number,
    itemIndex: number
  ) => {
    drugItem.current = { groupIndex, itemIndex };
    drugNode.current = event.target;

    drugNode.current.addEventListener("dragend", handleDragEnd);

    setTimeout(setDragging, 0, true);
  };

  const handleDragEnd = () => {
    setDragging(false);

    drugNode.current.removeEventListener("dragend", handleDragEnd);

    drugItem.current = null;
    drugNode.current = null;

    if (!list.length) return;

    axios
      .post("http://localhost:5000/tasks", {
        list,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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

        newList[groupIndex].items.splice(
          itemIndex,
          0,
          newList[currentItem!.groupIndex].items.splice(
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
      <HeadGrid length={list.length}>
        {list?.map((group: any, groupIndex) => (
          <ColumnTitle>{group.title}</ColumnTitle>
        ))}
      </HeadGrid>

      <Grid length={list.length}>
        {list?.map((group: any, groupIndex) => (
          <Column
            key={group.title}
            onDragEnter={
              dragging && !group.items.length
                ? (event) => handleDragEnter(event, groupIndex, 0)
                : undefined
            }
          >
            {group.items.map((item: any, itemIndex: number) => (
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
