import styled from "styled-components";

import {ReactComponent as BordioLogo} from "../../public/icons/BordioLogo.svg";

import {Input} from "../Input";

const Container = styled.div`
  padding: 26px 16px 19px 16px;
`;

const BordioLogoStyled = styled(BordioLogo)`
  margin-bottom: 26px;
`;

export const TopBlock = () => (
  <Container>
    <BordioLogoStyled />
    <Input placeholder="Search..." />
  </Container>
);
