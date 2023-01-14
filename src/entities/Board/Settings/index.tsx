import React, { MouseEvent, useState } from "react";

import { ReactComponent as PlusIcon } from "../../../public/icons/PlusIcon.svg";

import { useAuth } from "../../../useAuth";

import { Modal, Avatar, Button, Input } from "../../../components";
import { signOut } from "firebase/auth";

import { setDoc, doc, deleteDoc, serverTimestamp } from "firebase/firestore";

import { AddNewButton } from "./styled";

interface SettingsProps {
  open?: boolean;
  onClose?: () => void;
}

export const Settings = ({ onClose, open }: SettingsProps) => {
  const [columnName, setColumnName] = useState("");
  const { dataBase, auth, user, setUser, uploadUserAvatar } = useAuth();

  // const addNewColumn = async () => {
  //   const docRef = doc(
  //     dataBase,
  //     `users/${user.uid}/projects/${currentProject}/columns`,
  //     columnName
  //   );

  //   await setDoc(docRef, {
  //     timestamp: serverTimestamp(),
  //     title: columnName,
  //     tasks: [],
  //   });
  // };

  // const deleteColumn = async () => {
  //   const docRef = doc(
  //     dataBase,
  //     `users/${user.uid}/projects/${currentProject}/columns/${columnName}`
  //   );

  //   await deleteDoc(docRef);
  // };

  // const handleOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser({});
  //     })
  //     .catch((error) => {});
  // };

  // const handleUpload = () => {
  //   uploadUserAvatar(userImage, user);
  // };

  return (
    <Modal open={open} onClose={onClose}>
      <Input
        value={columnName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setColumnName(event.target.value)
        }
        type="text"
      />

      <AddNewButton onClick={() => {}}>
        <span>CREATE</span>
      </AddNewButton>
    </Modal>
  );
};
