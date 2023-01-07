import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useAuth } from "../../useAuth";

import { Button } from "../../components/Button";

import { ReactComponent as GoogleIcon } from "../../assets/GoogleIcon.svg";

import {
  Line,
  Fields,
  Title,
  ButtonStyled,
  Input,
  LinkToRegister,
  Divider,
  Container,
  LinkStyled,
} from "./styled";

const provider = new GoogleAuthProvider();

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const loginWithGoogle = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("credential", credential);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  return (
    <Container>
      <Fields>
        <Title>Log in</Title>

        <ButtonStyled variant="white" onClick={loginWithGoogle}>
          <GoogleIcon />
          Login with Google
        </ButtonStyled>

        <Divider>
          <Line />
          <span>or Log in with Email</span>
          <Line />
        </Divider>

        <Input
          placeholder="email"
          type="email"
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />

        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />

        <Button onClick={handleLogin} disabled={!email && !password}>
          Log in
        </Button>

        <LinkToRegister>
          Don't have an account?
          <LinkStyled to="/auth/registration"> Registration</LinkStyled>
        </LinkToRegister>

        <LinkToRegister>
          Forgot password?
          <LinkStyled to="/auth/reset"> Reset</LinkStyled>
        </LinkToRegister>
      </Fields>
    </Container>
  );
};
