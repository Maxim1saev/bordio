import styled from "styled-components";

import {Lists} from "./Lists";
import {TopBlock} from "./TopBlock";

const Container = styled.aside`
  width: 219px;

  background: ${({theme}) => theme.palette.blue3};
`;

const MyWorkspace = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;

  background: ${({theme}) => theme.palette.blue2};

  span {
    margin-left: 8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${({theme}) => theme.palette.white};
  }
`;

export const Sidebar = () => (
  <Container>
    <TopBlock />

    <MyWorkspace />

    <Lists />
  </Container>
);
