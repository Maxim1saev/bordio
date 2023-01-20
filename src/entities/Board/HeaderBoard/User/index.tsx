import { FC, useState, useCallback } from "react";

import { ReactComponent as ManageAccountIcon } from "../../../../assets/ManageAccountIcon.svg";

import { Popover } from "./Popover";

import {
  AvatarStyled,
  UserBlock,
  AvatarWrapper,
  IconContainer,
} from "./styled";

interface IUser {
  username: string;
  userPhoto: string;
  handleOpenSettings: () => void;
}

export const User: FC<IUser> = ({
  username,
  userPhoto,
  handleOpenSettings,
}) => {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => setOpen(false), []);

  return (
    <UserBlock onClick={() => setOpen(true)}>
      <AvatarWrapper showIcon={open}>
        <AvatarStyled src={userPhoto} />

        <IconContainer>
          <ManageAccountIcon />
        </IconContainer>
      </AvatarWrapper>

      {open && (
        <Popover
          handleOpenSettings={handleOpenSettings}
          onClose={onClose}
          userPhoto={userPhoto}
          username={username}
        />
      )}
    </UserBlock>
  );
};
