import styled from "styled-components";
import { ReactComponent as BellIcon } from "../../../public/icons/BellIcon.svg";

const Container = styled.button`
  position: relative;
`;

const Counter = styled.div`
  height: 20px;
  width: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 50%;
  padding: 4px;

  background: ${({ theme }) => theme.palette.red};
  border: 1px solid ${({ theme }) => theme.palette.white};
  text-align: center;
  border-radius: 4px;

  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: ${({ theme }) => theme.palette.white};
`;

export const NoificationButton = ({}) => (
  <Container>
    <BellIcon />
    <Counter>99+</Counter>
  </Container>
);
