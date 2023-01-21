import { useState, useCallback, useRef, FC } from "react";
import styled from "styled-components";

import { ReactComponent as MoreHorizIcon } from "../../assets/MoreHorizIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/DeleteIcon.svg";
import { ReactComponent as EditIcon } from "../../assets/EditIcon.svg";

import { Button } from "../../components";
import { useClickOutside } from "../../hooks";

interface IItem {
  isActive: boolean;
  title: string;
  setCurrentProject: (title: string) => void;
}

export const Item: FC<IItem> = ({ isActive, title, setCurrentProject }) => {
  const [openPopover, setOpenPopover] = useState(false);

  const ref = useRef(null);

  const handleTogglePopover = useCallback(
    () => setOpenPopover((prevValue) => !prevValue),
    []
  );

  useClickOutside(ref, () => setOpenPopover(false));

  console.log(title, isActive);

  return (
    <ListItem
      isActive={isActive}
      open={openPopover}
      onClick={() => setCurrentProject(title)}
    >
      {title}

      <MoreHorizIconStyled onClick={handleTogglePopover} />

      {openPopover && (
        <Popover ref={ref}>
          <ButtonStyled variant="white">
            <EditIconStyled />
            Rename project
          </ButtonStyled>

          <ButtonStyled variant="white">
            <DeleteIconStyled />
            Delete project
          </ButtonStyled>
        </Popover>
      )}
    </ListItem>
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

  fill: ${({ theme }) => theme.palette.red};
`;

const MoreHorizIconStyled = styled(MoreHorizIcon)`
  height: 24px;
  display: none;

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

const ListItem = styled.li<{ isActive: boolean; open: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.white : theme.palette.gray4};
  cursor: pointer;
  border-bottom: 1px solid transparent;
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
