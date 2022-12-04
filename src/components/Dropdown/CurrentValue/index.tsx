import { ArrowStyled, Value, Container, ArrowButton } from "./styled";

interface ComboBoxProps {
  isOpen: boolean;
  inputValue: string;
  setOpen: (open: boolean) => void;
}

export const CurrentValue = ({
  inputValue,
  isOpen,
  setOpen,
}: ComboBoxProps) => (
  <Container isOpen={isOpen}>
    <Value>{inputValue}</Value>

    <ArrowButton
      onClick={(event) => {
        event.stopPropagation();
        setOpen(true);
      }}
    >
      <ArrowStyled isOpen={isOpen} />
    </ArrowButton>
  </Container>
);
