import styled from "styled-components";
import { ReactComponent as ExpandArrowIcon } from "../../assets/ExpandArrowIcon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  cursor: pointer;

  &:hover {
    svg:last-child {
      fill: ${({ theme }) => theme.palette.white};
    }
  }
`;

export const ArrowStyled = styled(ExpandArrowIcon)<{ expanded: boolean }>`
  margin-right: 8px;

  fill: ${({ theme }) => theme.palette.gray4};
  transform: ${({ expanded }) => expanded && "rotate(180deg)"};
`;

export const Content = styled.div<{ expanded: boolean }>`
  height: ${({ expanded }) => (expanded ? "100%" : 0)};
  margin-top: ${({ expanded }) => expanded && "22px"};

  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  transition: all 0.08s;
`;
