import styled from "styled-components";

import {Lists} from "./Lists";
import {MyWorkspace} from "./MyWorkspace";
import {TopBlock} from "./TopBlock";

const Container = styled.aside`
  width: 219px;

  background: ${({theme}) => theme.palette.blue3};
`;

export const Sidebar = () => (
  <Container>
    <TopBlock />

    <MyWorkspace />

    <Lists />
  </Container>
);
