import { useRef, useState, useCallback } from "react";
import styled from "styled-components";

import { useClickOutside } from "../../hooks/useClickOutside";

import { DropdownItem, ComboBoxProps } from "./types";

import { CurrentValue } from "./CurrentValue";
import { OptionsList } from "./OptionsList";

const Container = styled.div`
  max-width: 170px;
  height: 40px;
  position: relative;
`;

export const Dropdown = ({
  initialValue,
  className,
  options,
}: ComboBoxProps) => {
  const [inputValue, setInputValue] = useState(
    initialValue || options?.[0]?.value || ""
  );
  const [isOpen, setOpen] = useState(false);

  const ref = useRef(null);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  const onItemClick = useCallback((option: DropdownItem) => {
    setInputValue(option.value);
    setOpen(false);
  }, []);

  return (
    <Container
      className={className}
      ref={ref}
      onClick={(event) => event.stopPropagation()}
    >
      <CurrentValue inputValue={inputValue} isOpen={isOpen} setOpen={setOpen} />

      <OptionsList
        options={options}
        isOpen={isOpen}
        onItemClick={onItemClick}
      />
    </Container>
  );
};
