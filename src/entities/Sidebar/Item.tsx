import { useState, useCallback, useRef, FC } from "react";
import styled from "styled-components";

import { ReactComponent as MoreHorizIcon } from "../../assets/MoreHorizIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/DeleteIcon.svg";
import { ReactComponent as EditIcon } from "../../assets/EditIcon.svg";

import { Button } from "../../components";
import { useAuth, useClickOutside } from "../../hooks";
import { deleteDoc, doc } from "firebase/firestore";
import { DeleteProjectModal } from "./DeleteProjectModal";
import { EditNameProjectModal } from "./EditNameProjectModal";

interface IItem {
  isActive: boolean;
  id: string;
  title: string;
  titles?: string[] | undefined;
  setCurrentProject: (title: string) => void;
}

export const Item: FC<IItem> = ({
  isActive,
  id,
  title,
  titles,
  setCurrentProject,
}) => {
  const [openPopover, setOpenPopover] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditNameModal, setOpenEditNameModal] = useState(false);

  const ref = useRef(null);

  const handleTogglePopover = useCallback(
    () => setOpenPopover((prevValue) => !prevValue),
    []
  );

  const handleToggleDeleteModal = useCallback(() => {
    setOpenPopover(false);
    setOpenDeleteModal((prevValue) => !prevValue);
  }, []);

  const handleToggleEditNameModal = useCallback(() => {
    setOpenPopover(false);
    setOpenEditNameModal((prevValue) => !prevValue);
  }, []);

  useClickOutside(ref, () => setOpenPopover(false));

  return (
    <>
      <ListItem
        isActive={isActive}
        open={openPopover}
        onClick={() => setCurrentProject(title)}
      >
        <Title isActive={isActive}>{title}</Title>

        <MoreHorizIconStyled onClick={handleTogglePopover} />

        {openPopover && (
          <Popover ref={ref}>
            <ButtonStyled onClick={handleToggleEditNameModal} variant="white">
              <EditIconStyled />
              Rename project
            </ButtonStyled>

            <ButtonStyled onClick={handleToggleDeleteModal} variant="white">
              <DeleteIconStyled />
              Delete project
            </ButtonStyled>
          </Popover>
        )}
      </ListItem>

      <DeleteProjectModal
        open={openDeleteModal}
        id={id}
        title={title}
        onClose={handleToggleDeleteModal}
      />

      <EditNameProjectModal
        open={openEditNameModal}
        id={id}
        title={title}
        titles={titles}
        onClose={handleToggleEditNameModal}
      />
    </>
  );
};

export const ButtonStyled = styled(Button)`
  min-height: 36px;

  &:first-of-type {
    margin-bottom: 4px;
  }
`;

export const EditIconStyled = styled(EditIcon)`
  margin-right: 4px;
  height: 18px;

  fill: ${({ theme }) => theme.palette.gray3};
`;

export const DeleteIconStyled = styled(DeleteIcon)`
  margin-right: 4px;
  height: 18px;

  fill: ${({ theme }) => theme.palette.paleRed};
`;

const MoreHorizIconStyled = styled(MoreHorizIcon)`
  height: 24px;
  display: none;
  position: absolute;
  right: 16px;

  fill: ${({ theme }) => theme.palette.gray4};

  &:hover {
    fill: ${({ theme }) => theme.palette.white};
  }
`;

const Popover = styled.div`
  width: max-content;
  position: absolute;
  left: 94%;
  top: 100%;
  margin: 5px 0;
  border-radius: 4px;

  padding: 12px 8px;

  z-index: 4;
  background-color: ${({ theme }) => theme.palette.white};

  box-shadow: 4px 4px 31px -3px rgb(34 60 80 / 20%);
`;

const Title = styled.span<{ isActive: boolean }>`
  padding-right: 24px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.white : theme.palette.gray4};
`;

const ListItem = styled.li<{ isActive: boolean; open: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;

  cursor: pointer;
  transition: all 0.2s;
  background: ${({ theme, isActive }) => isActive && theme.palette.blue2};

  ${({ open, theme }) =>
    open &&
    `
      ${MoreHorizIconStyled} {
        display: block;
      }

      ${MoreHorizIconStyled} {
          fill: ${theme.palette.white};
      }
 
    `}

  &:hover {
    background: ${({ isActive }) => !isActive && "rgba(45, 64, 113, 0.396)"};
    color: ${({ theme }) => theme.palette.white};

    ${MoreHorizIconStyled} {
      display: block;
    }
  }
`;
