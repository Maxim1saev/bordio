import styled from "styled-components";

export const Option = styled.li`
  min-height: 40px;
  display: flex;
  align-items: center;
  padding: 8px;

  cursor: pointer;
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.white};

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.gray1};
  }
`;

export const List = styled.ul<{ isOpen: boolean }>`
  width: 100%;
  min-width: 132px;
  max-height: 240px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  padding: 6px;
  margin-top: 6px;

  background: ${({ theme }) => theme.palette.white};
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;
