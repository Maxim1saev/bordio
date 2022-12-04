export interface IToolsList {
  Icon: React.ReactNode;
  title: keyof typeof ItemsTitleEnum;
}

export enum ItemsTitleEnum {
  Roadmap = "Roadmap",
  Schedule = "Schedule",
  Tasks = "Tasks",
  Notes = "Notes",
  Files = "Files",
}

export interface IActive {
  active: boolean;
}
