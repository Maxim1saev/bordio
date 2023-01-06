import { useState } from "react";

import { Dropdown } from "../../../components";
import { ReactComponent as PlusIcon } from "../../../public/icons/PlusIcon.svg";

import { NoificationButton } from "./NoificationButton";
import { useAuth } from "../../../useAuth";

import { v4 as uuidv4 } from "uuid";

import { Modal } from "../../../components/Modal";
import { updateProfile, signOut } from "firebase/auth";

import { VIEW_TYPE_OPTIONS, MOKK_OPTIONS } from "./constants";

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
  Container,
  AvatarStyled,
  InputStyled,
  Side,
  AddNewButton,
} from "./styled";

const COLORS = [
  " #B7E1FE",
  "#BFF2FC",
  "#A4D7DB",
  "#ABE9CE",
  "#CEF8C9",
  "#D9E6A2",
  "#FEC6B7",
  "#FFDFBA",
  "#F2BAE1",
  "#D8DCFF",
];
const getRandomColor = () =>
  COLORS[Math.abs(Math.round(Math.random() * COLORS.length) - 1)];

export const HeaderBoard = ({
  data,
  currentProject,
}: {
  data: any;
  currentProject: any;
}) => {
  const [open, setOpen] = useState(false);
  const [columnName, setColumnName] = useState("");
  const [userImage, setUserImage] = useState<any>();
  const { dataBase, auth, user, setUser, uploadUserAvatar } = useAuth();

  const addNew = async () => {
    const docRef = doc(
      dataBase,
      `users/${user.uid}/projects/${currentProject}/columns`,
      columnName
    ); // третий аргумент это id если не уникальный то не сработает второй раз

    await setDoc(docRef, { title: columnName, tasks: [] });
  };

  const deleteColumn = async () => {
    const docRef = doc(dataBase, `users/${user.uid}/column/;l;;`); // третий аргумент это id если не уникальный то не сработает второй раз

    await deleteDoc(docRef);
  };

  const handleOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
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
        <AddNewButton onClick={deleteColumn}>
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

        <Dropdown options={VIEW_TYPE_OPTIONS} />
        <Dropdown options={MOKK_OPTIONS} />
      </Side>

      <Side>
        {user.displayName}
        <AvatarStyled
          src={
            user.photoURL ||
            "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Pic.png"
          }
        />
      </Side>

      <Modal open={open} onClose={onClose}>
        <input
          style={{ border: "1px solid" }}
          defaultValue={columnName}
          onChange={(event: any) => setColumnName(event.target.value)}
          type="text"
        />

        <AddNewButton onClick={addNew}>
          <span>CREATE</span>
        </AddNewButton>
      </Modal>
    </Container>
  );
};
