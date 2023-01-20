import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { useAuth } from "../../hooks/useAuth";

import { Button } from "../../components/Button";

import {
  Fields,
  Title,
  Input,
  LinkToRegister,
  Container,
  LinkStyled,
} from "./styled";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { setUser, auth, user: currentUser } = useAuth();
  const navigate = useNavigate();

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

        name && updateProfile(user, { displayName: name });
      })
      .catch((error) => {
        console.log("errorCode", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Container>
      <Fields>
        <Title>Register</Title>

        <Input
          placeholder="Имя"
          type="text"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />

        <Input
          placeholder="ЭМЕЙЛ"
          type="email"
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

        <LinkToRegister>
          Already have an account?
          <LinkStyled to="/auth/signin">Sign in</LinkStyled>
        </LinkToRegister>
      </Fields>
    </Container>
  );
};
