import { useState } from "react";

import styled from "styled-components";
import { Avatar, Input, Dropdown } from "../../../components";
import { ReactComponent as PlusIcon } from "../../../public/icons/PlusIcon.svg";

import { DropdownItem } from "../../../components/Dropdown/types";

import { NoificationButton } from "./NoificationButton";
import { useAuth } from "../../../useAuth";

import { v4 as uuidv4 } from "uuid";

import { Modal } from "../../../components/Modal";
import { getAuth, signOut } from "firebase/auth";

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
} from "firebase/firestore";
const VIEW_TYPE_OPTIONS: DropdownItem[] = [
  { value: "Board view", id: 1 },
  { value: "Table view", id: 2 },
  { value: "Kanban", id: 3 },
  { value: "Looong beautiful text ", id: 4 },
];

const MOKK_OPTIONS: DropdownItem[] = [
  { value: "Filter", id: 1 },
  { value: "Sort", id: 2 },
];

const Container = styled.div`
  position: fixed;
  left: 380px;
  right: 0;
  top: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  box-shadow: 0px 2px 4px #f0f1f2;
`;

const AvatarStyled = styled(Avatar)`
  width: 40px;
  height: 40px;
`;

const InputStyled = styled(Input)`
  width: 180px;
  height: 40px;
  padding: 12px 16px;

  background: ${({ theme }) => theme.palette.gray1};
  border-radius: 50px;

  div {
    right: 16px;
  }
`;

const Side = styled.div`
  display: flex;
  column-gap: 16px;
`;

const AddNewButton = styled.button`
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

export const HeaderBoard = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);
  const [columnName, setColumnName] = useState("");
  const [taskName, setTaskName] = useState("");
  const { dataBase, auth, user, setUser } = useAuth();

  const addColumn = async () => {
    try {
      const docRef = doc(dataBase, "users", user.uid);
      const docSnap = await getDoc(docRef);

      docSnap.exists()
        ? await updateDoc(docRef, {
            column: arrayUnion({
              id: uuidv4(),
              title: columnName,
              tasks: [
                {
                  color: "red",
                  title: "My task",
                  duration: "888",
                },
              ],
            }),
          })
        : await setDoc(docRef, {
            column: [
              {
                id: uuidv4(),
                title: columnName,
                tasks: [],
              },
            ],
          });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const addTask = async () => {
    try {
      const docRef = doc(dataBase, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // const currentData = docSnap
      //   .data()
      //   ?.column.find((item: any) => item?.title === "New COLUMN");

      // console.log("currentData", currentData);
      // //

      await updateDoc(docRef, {
        column: data,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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

  const onClose = () => setOpen(false);
  return (
    <Container>
      <Side>
        <AddNewButton onClick={() => setOpen(true)}>
          <PlusIcon />

          <span>Add column</span>
        </AddNewButton>

        <AddNewButton onClick={handleOut}>
          <span>OUT</span>
        </AddNewButton>

        <Dropdown options={VIEW_TYPE_OPTIONS} />

        <Dropdown options={MOKK_OPTIONS} />
      </Side>

      <Side>
        <InputStyled placeholder="Search..." />

        <NoificationButton />

        <AvatarStyled src="https://icdn.lenta.ru/images/2020/10/09/14/20201009140751252/square_1280_22ba8acd098aa33202c1c812c0a734b8.jpg" />
      </Side>

      <Modal open={open} onClose={onClose}>
        <input
          style={{ border: "1px solid" }}
          value={columnName}
          onChange={(event: any) => setColumnName(event.target.value)}
          type="text"
        />

        <AddNewButton onClick={addColumn}>
          <span>CREATE</span>
        </AddNewButton>
      </Modal>
    </Container>
  );
};
