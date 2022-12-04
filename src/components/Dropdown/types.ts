export type DropdownItem = { value: string; id: number };

export interface ComboBoxProps {
  className?: string;
  initialValue?: string;
  options: DropdownItem[];
}
