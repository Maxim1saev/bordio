import styled from "styled-components";

import { Lists } from "./Lists";
import { ReactComponent as BordioLogo } from "../../assets/BordioLogo.svg";
import { Avatar } from "../../components";
import { useAuth } from "../../hooks/useAuth";

const Container = styled.aside`
  width: 226px;
  flex-shrink: 0;

  background: ${({ theme }) => theme.palette.blue3};
`;

const Wrap = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.blue2};
  border-bottom: 1px solid ${({ theme }) => theme.palette.blue2};
`;

const LogoWrapper = styled.div`
  padding: 26px 16px 19px 16px;
`;

const WorkspaceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
  padding: 6px 16px;

  background: ${({ theme }) => theme.palette.blue2};

  span {
    margin-left: 8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.palette.white};
  }
`;

export const Sidebar = ({
  setCurrentProject,
  currentProject,
}: {
  setCurrentProject: any;
  currentProject: string | undefined;
}) => {
  const { user } = useAuth();

  return (
    <Container>
      <LogoWrapper>
        <BordioLogo />
      </LogoWrapper>

      <Wrap>
        <WorkspaceContainer>
          <Avatar src={user?.photoURL} />

          <span> My workspace</span>
        </WorkspaceContainer>

        <Lists
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
      </Wrap>
    </Container>
  );
};
