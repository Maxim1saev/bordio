import React, { FC, useEffect, useMemo, MouseEvent } from "react";
import { createPortal } from "react-dom";

import { Container, Card } from "./styled";

interface ExpansionPanelProps {
  open?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

const modalBlock = document.querySelector("#modal");

export const Modal: FC<ExpansionPanelProps> = ({
  open,
  className,
  children,
  onClose,
}) => {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    if (open) {
      modalBlock?.appendChild(element);
    }

    return () => {
      if (open) {
        modalBlock?.removeChild(element);
      }
    };
  }, [element, open]);

  if (!open) return null;

  return createPortal(
    <Container onClick={onClose}>
      <Card
        className={className}
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
