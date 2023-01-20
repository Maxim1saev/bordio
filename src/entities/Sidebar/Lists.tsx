import { useState } from "react";
import styled from "styled-components";

import { ExpansionPanel } from "../../components/ExpansionPanel";

import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../../components/Modal";

import { collection, setDoc, doc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { ReactComponent as PlusIcon } from "../../public/icons/PlusIcon.svg";

export const Lists = ({ setCurrentProject }: { setCurrentProject: any }) => {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  const { user, dataBase } = useAuth();

  const addNew = async () => {
    const docRef = doc(dataBase, `users/${user.uid}/projects`, projectName);

    await setDoc(docRef, { title: projectName });
  };

  const onClose = () => setOpen(false);

  const query = collection(dataBase, `users/${user.uid}/projects`);

  const [projects, loading, error] = useCollectionData(query);

  return (
    <>
      <Container>
        <ExpansionPanel
          title={
            <PanelTitle>
              My Projects
              <IconWrapper>
                <PlusIconStyled
                  onClick={(event) => {
                    event.stopPropagation();

                    setOpen(true);
                  }}
                />
              </IconWrapper>
            </PanelTitle>
          }
        >
          <ul>
            {projects?.map(({ title }) => (
              <ListItem onClick={() => setCurrentProject(title)}>
                {title}
              </ListItem>
            ))}
          </ul>
        </ExpansionPanel>
      </Container>
      <Modal open={open} onClose={onClose}>
        <input
          style={{ border: "1px solid" }}
          value={projectName}
          onChange={(event: any) => setProjectName(event.target.value)}
          type="text"
        />

        <AddNewButton onClick={addNew}>
          <span>CREATE</span>
        </AddNewButton>
      </Modal>
      ;
    </>
  );
};

export const AddNewButton = styled.button`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 8px 20px;

  border-radius: 50px;
  box-shadow: 0px 2px 4px #f0f1f2;
  background: ${({ theme }) => theme.palette.blue1};

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.palette.white};
  }
`;

const Container = styled.div`
  margin-top: 13px;
  padding: 0 16px;
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
  width: 18px;
  height: 18px;
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

const ListItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.gray4};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.gray3};
  }

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;
