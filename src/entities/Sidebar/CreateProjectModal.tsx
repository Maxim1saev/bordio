import { ChangeEvent, FC, useMemo, useState } from "react";
import styled from "styled-components";

import { Button, Modal, Input } from "../../components";
import { useAuth } from "../../hooks";
import { v4 as uuidv4 } from "uuid";

import { setDoc, doc, serverTimestamp } from "firebase/firestore";

interface ICreateProjectModalProps {
  open: boolean;
  titles: string[] | undefined;
  projects?: any[] | [];
  onClose: () => void;
}

export const CreateProjectModal: FC<ICreateProjectModalProps> = ({
  open,
  titles,
  projects,
  onClose,
}) => {
  const [projectName, setProjectName] = useState<string | undefined>(undefined);

  const { user, dataBase } = useAuth();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projectId = useMemo(() => uuidv4(), [projects]);

  const createProject = async () => {
    const docRef = doc(dataBase, `users/${user.uid}/projects`, projectId);

    onClose();

    await setDoc(docRef, {
      id: projectId,
      title: projectName,
      timestamp: serverTimestamp(),
    });
  };

  const errorMessage =
    !!projectName?.length &&
    (projectName?.length < 3
      ? "The name is too short"
      : projectName?.length > 30
      ? "The name must be shorter than 30 characters"
      : titles?.includes(projectName)
      ? "Такое имя есть"
      : "");

  return (
    <ModalStyled open={open} onClose={onClose}>
      <Container>
        <Text>
          <Title>Create project</Title>

          <Input
            error={errorMessage}
            placeholder="Project name"
            type="text"
            value={projectName}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setProjectName(event.target.value)
            }
          />
        </Text>

        <Controls>
          <Button variant="white" maxWidth={false} onClick={onClose}>
            Cancel
          </Button>

          <Button
            disabled={!!errorMessage}
            maxWidth={false}
            onClick={createProject}
          >
            Save
          </Button>
        </Controls>
      </Container>
    </ModalStyled>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
  padding: 18px 30px;

  border-top: 1px solid ${({ theme }) => theme.palette.gray5}; ;
`;

const ModalStyled = styled(Modal)`
  width: 480px;
  min-height: unset;
  padding: 0;
`;

const Title = styled.div`
  margin-bottom: 16px;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const Text = styled.div`
  padding: 28px 28px 0 28px;
`;
