import { useState, useMemo } from "react";
import styled from "styled-components";

import { ExpansionPanel } from "../../components/ExpansionPanel";

import { useAuth } from "../../hooks/useAuth";

import { collection, query, orderBy } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { Item } from "./Item";

import { ReactComponent as PlusIcon } from "../../assets/PlusIcon.svg";
import { CreateProjectModal } from "./CreateProjectModal";

export const Lists = ({
  setCurrentProject,
  currentProject,
}: {
  setCurrentProject: any;
  currentProject: string | undefined;
}) => {
  const [open, setOpen] = useState(false);

  const { user, dataBase } = useAuth();

  const onToggle = () => setOpen((prevValue) => !prevValue);

  const queryData = useMemo(() => {
    const collectionRef = collection(dataBase, `users/${user.uid}/projects`);

    return query(collectionRef, orderBy("timestamp", "asc"));
  }, [dataBase, user.uid]);

  const [projects, loading, error] = useCollectionData(queryData);

  const titles = useMemo(() => projects?.map(({ title }) => title), [projects]);

  return (
    <>
      <Container>
        <ExpansionPanel
          title={
            <PanelTitle>
              My Projects
              <IconWrapper
                onClick={(event) => {
                  event.stopPropagation();

                  onToggle();
                }}
              >
                <PlusIconStyled />
              </IconWrapper>
            </PanelTitle>
          }
        >
          <ul>
            {projects?.map(({ title, id }) => (
              <Item
                title={title}
                titles={titles}
                id={id}
                isActive={currentProject === id}
                setCurrentProject={setCurrentProject}
              />
            ))}
          </ul>
        </ExpansionPanel>
      </Container>

      <CreateProjectModal
        open={open}
        onClose={onToggle}
        projects={projects}
        titles={titles}
      />
    </>
  );
};

const Container = styled.div`
  margin-top: 13px;
`;

const PanelTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: ${({ theme }) => theme.palette.white};
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2px;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const PlusIconStyled = styled(PlusIcon)`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.palette.gray4};
`;
