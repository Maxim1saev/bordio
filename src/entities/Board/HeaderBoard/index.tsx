import { useState } from "react";

import { ReactComponent as PlusIcon } from "../../../public/icons/PlusIcon.svg";

import { useAuth } from "../../../useAuth";

import { Modal } from "../../../components/Modal";
import { signOut } from "firebase/auth";

import { setDoc, doc, deleteDoc, serverTimestamp } from "firebase/firestore";

import { Container, AvatarStyled, Side, AddNewButton } from "./styled";

export const HeaderBoard = ({ currentProject }: { currentProject: any }) => {
  const [open, setOpen] = useState(false);
  const [columnName, setColumnName] = useState("");
  const [userImage, setUserImage] = useState<any>();
  const { dataBase, auth, user, setUser, uploadUserAvatar } = useAuth();

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
  console.log("userImage", userImage);

  const handleUpload = () => {
    uploadUserAvatar(userImage, user);
  };

  const onClose = () => setOpen(false);

  return (
    <Container>
      <Side>
        <AddNewButton onClick={() => setOpen(true)}>
          <PlusIcon />

          <span>Add column</span>
        </AddNewButton>
        <AddNewButton onClick={() => setOpen(true)}>
          <PlusIcon />

          <span>DELETE column</span>
        </AddNewButton>
        <AddNewButton onClick={handleOut}>
          <span>OUT</span>
        </AddNewButton>

        <input
          accept=".jpg, .jpeg, .png,"
          type="file"
          onChange={(event: any) => {
            setUserImage(event.target.files[0]);
          }}
        />
        <button onClick={handleUpload}>UPLOAD</button>
      </Side>

      <Side>
        {user.displayName}
        <AvatarStyled src={user.photoURL} />
      </Side>

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
    </Container>
  );
};
