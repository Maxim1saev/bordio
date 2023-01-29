import { useState, useCallback } from "react";

import { ReactComponent as PlusIcon } from "../../../assets/PlusIcon.svg";

import { useAuth } from "../../../hooks/useAuth";

import { Modal } from "../../../components/Modal";

import {
  setDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  DocumentData,
} from "firebase/firestore";

import { Settings } from "../../Settings";

import { Container, Side, AddNewButton } from "./styled";

import { User } from "./User";
import { ColumnModal } from "../../Sidebar/ColumnModal";

export const HeaderBoard = ({
  currentProject,
  columns,
}: {
  columns: DocumentData[] | undefined;
  currentProject: any;
}) => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const { dataBase, user } = useAuth();

  const handleToggleSettings = useCallback(
    () => setOpenSettings((prevValue) => !prevValue),
    []
  );

  const addNewColumn = async (columnName: string) => {
    const docRef = doc(
      dataBase,
      `users/${user.uid}/projects/${currentProject}/columns`,
      columnName
    );

    await setDoc(docRef, {
      timestamp: serverTimestamp(),
      title: columnName,
      tasks: [],
    });
  };

  const deleteColumn = async (columnName: string) => {
    const docRef = doc(
      dataBase,
      `users/${user.uid}/projects/${currentProject}/columns/${columnName}`
    );

    await deleteDoc(docRef);
  };

  return (
    <Container>
      <Side>
        <AddNewButton onClick={() => setOpenAdd(true)}>
          <PlusIcon />

          <span>Добавить колонку</span>
        </AddNewButton>
        <AddNewButton onClick={() => setOpenDelete(true)}>
          <PlusIcon />

          <span>Удалить колонку</span>
        </AddNewButton>
      </Side>
      <User
        username={user.displayName}
        userPhoto={user.photoURL}
        handleOpenSettings={handleToggleSettings}
      />
      <ColumnModal
        columns={columns?.map(({ title }) => title)}
        actionName="Add column"
        actionHandler={addNewColumn}
        open={openAdd}
        onClose={() => setOpenAdd(false)}
      />

      <ColumnModal
        columns={columns?.map(({ title }) => title)}
        actionName="Delete column"
        actionHandler={deleteColumn}
        open={openDelete}
        onClose={() => setOpenDelete(false)}
      />
      <Settings open={openSettings} onClose={handleToggleSettings} />
    </Container>
  );
};
