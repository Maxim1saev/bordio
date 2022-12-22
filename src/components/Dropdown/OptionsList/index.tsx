import { DropdownItem } from "../types";
import { Option, List } from "./styled";

interface ComboBoxProps {
  isOpen: boolean;
  options: DropdownItem[];
  onItemClick: (value: DropdownItem) => void;
}

export const OptionsList = ({
  isOpen,
  options,
  onItemClick,
}: ComboBoxProps) => (
  <List isOpen={isOpen}>
    {options.length &&
      options.map((option) => (
        <Option key={option.id} onClick={() => onItemClick(option)}>
          <span>{option.value}</span>
        </Option>
      ))}
  </List>
);
