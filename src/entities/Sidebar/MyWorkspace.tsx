import styled from "styled-components";

import {Avatar} from "../../components/Avatar";

export const MyWorkspace = () => (
  <Container>
    <Avatar src="https://icdn.lenta.ru/images/2020/10/09/14/20201009140751252/square_1280_22ba8acd098aa33202c1c812c0a734b8.jpg" />

    <span> My workspace</span>
  </Container>
);

const Container = styled.div`
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
