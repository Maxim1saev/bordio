import {useState} from "react";

import {ReactComponent as RoadmapIcon} from "../../public/icons/RoadmapIcon.svg";
import {ReactComponent as FilesIcon} from "../../public/icons/FilesIcon.svg";
import {ReactComponent as NotesIcon} from "../../public/icons/NotesIcon.svg";
import {ReactComponent as ScheduleIcon} from "../../public/icons/ScheduleIcon.svg";
import {ReactComponent as TasksIcon} from "../../public/icons/TasksIcon.svg";

import {IToolsList, ItemsTitleEnum} from "./types";

import {
  Container,
  Title,
  Item,
  ItemTitle,
  ActiveMarker,
  IconWrapper,
} from "./styled";

const TOOLS_LIST: IToolsList[] = [
  {
    Icon: <RoadmapIcon />,
    title: ItemsTitleEnum.Roadmap,
  },
  {
    Icon: <ScheduleIcon />,
    title: ItemsTitleEnum.Schedule,
  },
  {
    Icon: <TasksIcon />,
    title: ItemsTitleEnum.Tasks,
  },
  {
    Icon: <NotesIcon />,
    title: ItemsTitleEnum.Notes,
  },
  {
    Icon: <FilesIcon />,
    title: ItemsTitleEnum.Files,
  },
];

export const Tools = () => {
  const [activeItem, setActiveItem] = useState<keyof typeof ItemsTitleEnum>(
    ItemsTitleEnum.Schedule
  );

  const handleActive = (item: keyof typeof ItemsTitleEnum) => {
    setActiveItem(item);
  };

  return (
    <Container>
      <Title>Tools</Title>

      <ul>
        {TOOLS_LIST.map(({Icon, title}) => {
          const isActive = activeItem === title;

          return (
            <Item
              key={title}
              active={isActive}
              onClick={() => handleActive(title)}
            >
              {isActive && <ActiveMarker />}

              <IconWrapper active={isActive}>{Icon}</IconWrapper>

              <ItemTitle active={isActive}>{title}</ItemTitle>
            </Item>
          );
        })}
      </ul>
    </Container>
  );
};
