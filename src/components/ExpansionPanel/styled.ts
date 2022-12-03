import styled from "styled-components";
import {Arrow} from "../Arrow";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const Title = styled.h3`
  margin-left: 8px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme}) => theme.palette.white};
`;

export const ArrowStyled = styled(Arrow)<{expanded: boolean}>`
  transform: ${({expanded}) => expanded && "rotate(180deg)"};
`;

export const Content = styled.div<{expanded: boolean}>`
  height: ${({expanded}) => (expanded ? "100%" : 0)};
  margin-top: ${({expanded}) => expanded && "22px"};

  opacity: ${({expanded}) => (expanded ? 1 : 0)};
  overflow: hidden;
  transition: all 0.08s;
`;
