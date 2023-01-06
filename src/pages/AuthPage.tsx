import { ChangeEvent, createContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { useAuth } from "../useAuth";
import authBackground from "../assets/authBackground.jpg";
import React from "react";

export const AuthContext = createContext({});

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  background-image: url(${authBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  padding: 45px 70px 50px;
  width: 483px;
  box-sizing: bord;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 26px;
  text-align: center;
`;

const Button = styled.button`
  font-size: 18px;
  height: 62px;
  border-radius: 30px;
  width: 100%;
  margin-top: 5px;

  cursor: pointer;

  margin: 0 0 16px 0;
  border: 0px;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  transition: background 0.3s ease-out 0s;
  padding: 0px 15px;
  min-width: 76px;
  color: rgb(255, 255, 255);

  background: rgb(0, 148, 255);
  /* background: rgb(125, 189, 235); */

  font-family: Roboto, sans-serif !important;
`;

const Input = styled.input`
  width: 293px;
  line-height: 50px;
  border-radius: 8px;
  outline: none;
  padding: 0px 18px;
  border: 0px;
  background: rgb(238, 242, 245);

  height: 51px;
  font-size: 16px;

  margin-bottom: 16px;
`;

export const AuthPage = () => {
  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("123123");

  const { setUser, auth, user: currentUser } = useAuth();
  const navigate = useNavigate();

  console.log("user", currentUser);

  useEffect(() => {
    if (currentUser?.uid) {
      navigate("/");
    }
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });

    return () => unsubscribe();
  }, []);

  const handleRegister = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Container>
      <Fields>
        <Title>Log in</Title>

        <Input
          placeholder="ЭМЕЙЛ"
          type="text"
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <Input
          placeholder="ПАРОЛЬ"
          type="password"
          value={password}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />

        <Button onClick={handleRegister}>Register</Button>
        <Button onClick={handleLogin}>Auth</Button>
      </Fields>
    </Container>
  );
};
