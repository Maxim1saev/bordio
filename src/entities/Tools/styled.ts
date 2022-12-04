import styled from "styled-components";

import { ReactComponent as ActiveMarkerIcon } from "../../public/icons/ActiveMarkerIcon.svg";
import { IActive } from "./types";

export const Container = styled.section`
  width: 154px;
  flex-shrink: 0;

  background: ${({ theme }) => theme.palette.gray1};
`;

export const Title = styled.span`
  display: block;
  margin: 24px 16px 26px 16px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.palette.black};
`;

export const Item = styled.li<IActive>`
  width: 138px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;

  cursor: pointer;
  border-radius: 0px 8px 8px 0px;
  background: ${({ theme, active }) =>
    active ? theme.palette.white : "transparent"};
`;

export const ItemTitle = styled.span<IActive>`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme, active }) =>
    active ? theme.palette.blue1 : theme.palette.black};
`;

export const ActiveMarker = styled(ActiveMarkerIcon)`
  position: absolute;
  left: 0;
`;

export const IconWrapper = styled.div<IActive>`
  margin: 0 10px;

  svg path {
    fill: ${({ theme, active }) => active && theme.palette.blue1};
  }
`;
