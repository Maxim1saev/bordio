import styled from "styled-components";

const AvatarImage = styled.img`
  width: 22px;
  height: 22px;

  border-radius: 50%;
`;

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatarImage",
  className,
}: AvatarProps) => <AvatarImage alt={alt} src={src} className={className} />;
