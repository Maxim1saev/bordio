import { useState } from "react";
import { Tools, Sidebar, Board } from "../entities";

export const TablePage = () => {
  const [currentProject, setCurrentProject] = useState();
  return (
    <>
      <Sidebar setCurrentProject={setCurrentProject} />

      <Tools />
      <Board currentProject={currentProject} />
    </>
  );
};
