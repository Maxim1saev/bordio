import { FC } from "react";
import styled from "styled-components";

import { Button, Modal } from "../../components";
import { useAuth } from "../../hooks";
import { deleteDoc, doc } from "firebase/firestore";

interface IItem {
  open: boolean;
  id: string;
  title: string;
  onClose: () => void;
}

export const DeleteProjectModal: FC<IItem> = ({ open, title, id, onClose }) => {
  const { dataBase, user } = useAuth();

  const deleteProject = async () => {
    const docRef = doc(dataBase, `users/${user.uid}/projects`, id);

    onClose();

    await deleteDoc(docRef);
  };

  return (
    <ModalStyled open={open} onClose={onClose}>
      <Container>
        <Text>
          <Title> Delete project</Title>
          <AreYouSure>
            Ты точно хочешь удалить проект
            <ProjectName>{title}</ProjectName> ?
          </AreYouSure>
        </Text>

        <Controls>
          <Button variant="white" maxWidth={false} onClick={onClose}>
            Cancel
          </Button>

          <DeleteButton maxWidth={false} onClick={deleteProject}>
            Delete project
          </DeleteButton>
        </Controls>
      </Container>
    </ModalStyled>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ProjectName = styled.span`
  padding: 6px 4px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray2};
  color: ${({ theme }) => theme.palette.blue3}; ;
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

const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.paleRed};

  &:hover {
    background: rgb(247, 22, 22);
  }
`;

const Title = styled.div`
  margin-bottom: 16px;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const AreYouSure = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  white-space: nowrap;
`;

const Text = styled.div`
  padding: 28px 28px 18px 28px;
`;
