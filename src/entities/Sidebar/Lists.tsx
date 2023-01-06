import styled from "styled-components";

import { ExpansionPanel } from "../../components/ExpansionPanel";

import { useAuth } from "../../useAuth";
import { Modal } from "../../components/Modal";

import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
  setDoc,
  doc,
  arrayRemove,
  onSnapshot,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";

export const Lists = ({ setCurrentProject }: { setCurrentProject: any }) => {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  const { user, dataBase } = useAuth();

  const addNew = async () => {
    const docRef = doc(dataBase, `users/${user.uid}/projects`, projectName); // третий аргумент это id если не уникальный то не сработает второй раз

    await setDoc(docRef, { title: projectName });
  };

  const onClose = () => setOpen(false);

  const query = collection(dataBase, `users/${user.uid}/projects`);

  const [projects, loading, error] = useCollectionData(query);

  return (
    <>
      <Container>
        <AddNewButton onClick={() => setOpen(true)}>
          <span>OPEN</span>
        </AddNewButton>

        <ExpansionPanel title="My Projects">
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

  svg path {
    fill: ${({ theme }) => theme.palette.white};
  }

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
