import { ChangeEvent, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

import { useAuth } from "../../useAuth";

import { Button } from "../../components/Button";

import { Fields, Title, Input, Container, RequestMessage } from "./styled";

export const Reset = () => {
  const [email, setEmail] = useState("");
  const [isRequest, setIsRequest] = useState(false);

  const { auth } = useAuth();

  const forgotPasswordHandler = () => {
    if (email)
      sendPasswordResetEmail(auth, email).then(() => {
        setEmail("");
        setIsRequest(true);
      });
  };

  return (
    <Container>
      <Fields>
        <Title>Password reset requested</Title>

        {isRequest ? (
          <RequestMessage>
            Check your email for further instructions
          </RequestMessage>
        ) : (
          <>
            <Input
              placeholder="ЭМЕЙЛ"
              type="text"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />

            <Button onClick={forgotPasswordHandler}>
              Request password reset
            </Button>
          </>
        )}
      </Fields>
    </Container>
  );
};
