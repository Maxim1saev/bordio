import { useState } from "react";
import { Sidebar, Board } from "../entities";

export const TablePage = () => {
  const [currentProject, setCurrentProject] = useState();
  return (
    <>
      <Sidebar
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />

      <Board currentProject={currentProject} />
    </>
  );
};
