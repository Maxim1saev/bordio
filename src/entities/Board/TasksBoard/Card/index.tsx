import React, { FC } from "react";

import { TaskTitle, TaskDuration, Container } from "./styled";

interface CardProps {
  item: any;
  isCurrent: boolean;
  groupIndex: number;
  itemIndex: number;
  handleDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
}

export const Card: FC<CardProps> = ({
  item,
  isCurrent,
  handleDragStart,
  handleDragEnter,
}) => {
  return (
    <Container
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      draggable
      key={item}
      background={item.color}
      isCurrent={isCurrent}
    >
      <TaskTitle>{item.title}</TaskTitle>
      <TaskDuration>{item.duration}</TaskDuration>
    </Container>
  );
};
