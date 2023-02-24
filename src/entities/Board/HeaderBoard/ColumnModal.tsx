import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

import { Button, Modal, Input } from "../../../components";

interface ColumnModalProps {
  open: boolean;
  columns: string[] | undefined;
  actionName: string;
  actionHandler: (name: string) => void;
  onClose: () => void;
}

export const ColumnModal: FC<ColumnModalProps> = ({
  open,
  columns = [],
  actionHandler,
  actionName,
  onClose,
}) => {
  const [name, setName] = useState<string | undefined>(undefined);

  const errorMessage =
    !!name?.length &&
    (name?.length < 3
      ? "The name is too short"
      : name?.length > 30
      ? "The name must be shorter than 30 characters"
      : columns?.includes(name)
      ? "Такое имя есть"
      : "");

  return (
    <ModalStyled open={open} onClose={onClose}>
      <Container>
        <Text>
          <Title>Rename project</Title>
          <Input
            error={errorMessage}
            placeholder="Имя"
            type="text"
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
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
            onClick={() => name && actionHandler(name)}
          >
            {actionName}
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
