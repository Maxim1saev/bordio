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
  style?: React.CSSProperties;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatarImage",
  className,
  style,
}: AvatarProps) => (
  <AvatarImage alt={alt} src={src} className={className} style={style} />
);
