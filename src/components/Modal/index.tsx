import React, { FC, useEffect, useMemo, MouseEvent } from "react";
import { createPortal } from "react-dom";

import { Container, Card } from "./styled";

interface ExpansionPanelProps {
  open?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const modalBlock = document.querySelector("#modal");

export const Modal: FC<ExpansionPanelProps> = ({ open, children, onClose }) => {
  const element = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    if (open) {
      modalBlock?.appendChild(element);

      return () => {
        modalBlock?.removeChild(element);
      };
    }
  }, [open]);

  if (!open) return null;

  return createPortal(
    <Container onClick={onClose}>
      <Card
        onClick={(event: MouseEvent) => {
          event.stopPropagation();
        }}
      >
        {children}
      </Card>
    </Container>,
    element
  );
};
