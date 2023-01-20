import { useCallback } from "react";
import styled from "styled-components";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { Avatar } from "../../components";
import { useAuth } from "../../hooks/useAuth";

import { ReactComponent as CameraIcon } from "../../assets/CameraIcon.svg";

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;
  opacity: 0;

  svg {
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.palette.white};
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const AvatarStyled = styled(Avatar)`
  width: 100%;
  height: 100%;
`;

const Name = styled.span`
  color: ${({ theme }) => theme.palette.black};
  font-size: 16px;
  line-height: 20px;
`;

const Email = styled.span`
  color: ${({ theme }) => theme.palette.gray4};
  font-size: 14px;
  line-height: 17px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 24px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 4;
  opacity: 0;
  cursor: pointer;
`;

const AvatarWrapper = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  overflow: hidden;

  border-radius: 50%;

  &:hover {
    ${IconContainer} {
      opacity: 1;
    }
  }
`;

export const User = () => {
  const { user, storage } = useAuth();

  const uploadUserAvatar = useCallback(
    async (file: any, user: any) => {
      const fileRef = ref(storage, user?.uid + ".png");

      await uploadBytes(fileRef, file);

      const photoURL = await getDownloadURL(fileRef);

      updateProfile(user, { photoURL });
    },
    [storage]
  );

  return (
    <Container>
      <AvatarWrapper>
        <AvatarStyled src={user?.photoURL} />

        <IconContainer>
          <CameraIcon />

          <InputStyled
            accept=".jpg, .jpeg, .png"
            type="file"
            onChange={(event: any) => {
              uploadUserAvatar(event.target.files[0], user);
            }}
          />
        </IconContainer>
      </AvatarWrapper>

      <UserInfo>
        <Name>{user.displayName}</Name>
        <Email>{user.email}</Email>
      </UserInfo>
    </Container>
  );
};
