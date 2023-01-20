import { useState, useCallback } from "react";

import { ReactComponent as PlusIcon } from "../../../public/icons/PlusIcon.svg";

import { useAuth } from "../../../hooks/useAuth";

import { Modal } from "../../../components/Modal";
import { signOut } from "firebase/auth";

import { setDoc, doc, deleteDoc, serverTimestamp } from "firebase/firestore";

import { Settings } from "../../Settings";

import { Container, Side, AddNewButton } from "./styled";

import { User } from "./User";

export const HeaderBoard = ({ currentProject }: { currentProject: any }) => {
  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [columnName, setColumnName] = useState("");
  const { dataBase, auth, user, setUser } = useAuth();

  const handleToggleSettings = useCallback(
    () => setOpenSettings((prevValue) => !prevValue),
    []
  );

  const addNewColumn = async () => {
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

  const deleteColumn = async () => {
    const docRef = doc(
      dataBase,
      `users/${user.uid}/projects/${currentProject}/columns/${columnName}`
    );

    await deleteDoc(docRef);
  };

  const handleOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };

  const onClose = () => setOpen(false);

  return (
    <Container>
      <Side>
        <AddNewButton onClick={() => setOpen(true)}>
          <PlusIcon />

          <span>Добавить колонку</span>
        </AddNewButton>
        <AddNewButton onClick={() => setOpen(true)}>
          <PlusIcon />

          <span>Удалить колонку</span>
        </AddNewButton>
      </Side>

      <User
        username={user.displayName}
        userPhoto={user.photoURL}
        handleOpenSettings={handleToggleSettings}
      />

      <Modal open={open} onClose={onClose}>
        <input
          style={{ border: "1px solid" }}
          defaultValue={columnName}
          onChange={(event: any) => setColumnName(event.target.value)}
          type="text"
        />

        <AddNewButton onClick={addNewColumn}>
          <span>CREATE</span>
        </AddNewButton>

        <AddNewButton onClick={deleteColumn}>
          <span>DELRTE</span>
        </AddNewButton>
      </Modal>

      <Settings open={openSettings} onClose={handleToggleSettings} />
    </Container>
  );
};
