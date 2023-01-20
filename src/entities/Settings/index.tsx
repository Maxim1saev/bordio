import styled from "styled-components";

import { Input, Modal, Button } from "../../components";
import { useAuth } from "../../hooks/useAuth";
import { ChangeEvent, useCallback, useState } from "react";

import Select from "react-select";

import { updateProfile } from "firebase/auth";

import { User } from "./User";

const options = [
  { value: "English", label: "English" },
  { value: "Русский", label: "Русский" },
  { value: "Белорусский", label: "Белорусский" },
];

const Container = styled.div`
  width: 100%;
`;

const SelectStyled = styled(Select)`
  & > div:first-of-type {
    margin-bottom: 24px;
    height: 50px;
  }
`;

interface SettingsProps {
  open?: boolean;
  onClose: () => void;
}

export const Settings = ({ onClose, open }: SettingsProps) => {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || "");

  const handleUpdateName = useCallback(() => {
    updateProfile(user, { displayName }).then(onClose);
  }, [displayName, onClose, user]);

  const errorMessage =
    displayName.length < 4
      ? "The name is too short"
      : displayName.length > 30
      ? "The name must be shorter than 30 characters"
      : "";

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <User />

        <Input
          error={errorMessage}
          placeholder="Имя"
          type="text"
          value={displayName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setDisplayName(event.target.value)
          }
        />

        <SelectStyled
          menuPlacement="top"
          onChange={(data) => console.log("data", data)}
          isSearchable={false}
          options={options}
        />

        <Button onClick={handleUpdateName}>Save changes</Button>
      </Container>
    </Modal>
  );
};
