import styled, { keyframes } from "styled-components";

export const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  display: none;
  animation: ${show} 0.2s;

  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 4px;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: rgb(67 90 111 / 30%) 0px 0px 1px,
    rgb(67 90 111 / 47%) 0px 8px 10px -4px;
  border-radius: 8px;
  padding: 8px;
`;

export const Block = styled.div`
  position: relative;
  display: flex;

  &:hover {
    ${Wrapper} {
      display: block;
    }
  }
`;
