import styled from "styled-components";

const AvatarImage = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 50%;
`;

interface AvatarProps {
  src?: string | undefined;
  alt?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatarImage",
  className,
}: AvatarProps) => (
  <AvatarImage
    alt={alt}
    src={
      src ||
      "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Pic.png"
    }
    className={className}
  />
);
