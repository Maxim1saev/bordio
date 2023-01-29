import styled from "styled-components";

import { TasksBoard } from "./TasksBoard";
import { HeaderBoard } from "./HeaderBoard";

import { collection, orderBy, query } from "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useMemo } from "react";

import { useAuth } from "../../hooks/useAuth";

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const Board = ({ currentProject }: { currentProject: any }) => {
  const { dataBase, user } = useAuth();

  const queryData = useMemo(() => {
    const collectionRef = collection(
      dataBase,
      `users/${user.uid}/projects/${currentProject}/columns`
    );

    return query(collectionRef, orderBy("timestamp", "asc"));
  }, [currentProject, dataBase, user.uid]);

  const [docs, loading, error] = useCollectionData(queryData);

  console.log("docs", docs);

  return (
    <Container>
      <HeaderBoard columns={docs} currentProject={currentProject} />

      <TasksBoard docs={docs} currentProject={currentProject} />
    </Container>
  );
};
