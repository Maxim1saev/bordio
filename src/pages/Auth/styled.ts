import styled from "styled-components";

import authBackground from "../../assets/authBackground.jpg";

import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  overflow-y: auto;

  background-image: url(${authBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.palette.blue1};
  text-decoration: none;
`;

export const LinkToRegister = styled.div`
  margin-top: 24px;
  font-size: 16px;
  color: rgb(150, 162, 172);
`;

export const Divider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  span {
    flex-shrink: 0;
    margin: 0px 15px;

    color: ${({ theme }) => theme.palette.gray3};
    font-size: 14px;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;

  background: ${({ theme }) => theme.palette.gray4};
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  padding: 45px 70px 50px;
  min-width: 483px;
  width: fit-content;
  box-shadow: 0px 0px 36px 18px rgba(34, 60, 80, 0.17);
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 26px;
  text-align: center;
`;

export const ButtonStyled = styled(Button)`
  svg {
    height: 25px;
    width: 25px;
    margin-right: 11px;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 50px;
  margin-bottom: 16px;
  padding: 0px 18px;

  line-height: 50px;
  border-radius: 8px;
  border: 0px;
  background: rgb(238, 242, 245);
  font-size: 16px;
`;

export const RequestMessage = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.palette.gray3};
`;
