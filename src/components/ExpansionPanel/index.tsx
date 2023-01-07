import React, { FC } from "react";

import { Container, Header, ArrowStyled, Content } from "./styled";

interface ExpansionPanelProps {
  title?: string | React.ReactNode;
  children?: React.ReactNode;
}

export const ExpansionPanel: FC<ExpansionPanelProps> = ({
  title,
  children,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpanded = () => {
    setExpanded((prevValue) => !prevValue);
  };

  return (
    <Container>
      <Header onClick={handleExpanded}>
        <ArrowStyled expanded={expanded} />

        {title}
      </Header>

      <Content expanded={expanded}>{children}</Content>
    </Container>
  );
};
