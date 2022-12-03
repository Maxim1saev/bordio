import styled from "styled-components";

import {ExpansionPanel} from "../ExpansionPanel";

export const Lists = () => (
  <Container>
    <ExpansionPanel title="Favorites">
      <ul>
        <ListItem>Marketing</ListItem>
        <ListItem>Mobile App</ListItem>
      </ul>
    </ExpansionPanel>

    <ExpansionPanel title="My Projects">
      <ul>
        <ListItem>Marketing</ListItem>
        <ListItem>Landing Pages</ListItem>
        <ListItem>Wedding</ListItem>
        <ListItem>House Construction</ListItem>
      </ul>
    </ExpansionPanel>
  </Container>
);

const Container = styled.div`
  margin-top: 13px;
  padding: 0 16px;
`;

const ListItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme}) => theme.palette.gray4};
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.palette.gray3};
  }

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;
