import { FC, useRef, MouseEvent } from "react";

import {
  AvatarStyled,
  Container,
  UserInfo,
  SettingsIconStyled,
  LogoutIconStyled,
  ButtonStyled,
} from "./styled";

import { signOut } from "firebase/auth";

import { useClickOutside, useAuth } from "../../../../../hooks";

interface IUser {
  username: string;
  userPhoto: string;
  handleOpenSettings: () => void;
  onClose: () => void;
}

export const Popover: FC<IUser> = ({
  username,
  userPhoto,
  handleOpenSettings,
  onClose,
}) => {
  const ref = useRef(null);

  useClickOutside(ref, onClose);

  const { auth, setUser } = useAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };

  return (
    <Container ref={ref}>
      <UserInfo>
        <AvatarStyled src={userPhoto} />
        <span>{username}</span>
      </UserInfo>

      <ButtonStyled
        variant="white"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();

          onClose();
          handleOpenSettings();
        }}
      >
        <SettingsIconStyled />
        Profile settings
      </ButtonStyled>

      <ButtonStyled variant="white" onClick={handleLogout}>
        <LogoutIconStyled />
        Logout
      </ButtonStyled>
    </Container>
  );
};
