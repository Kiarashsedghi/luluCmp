import React, { createContext, useReducer, useContext } from "react";
import ModalReducer from "./reducers/ModalReducer";
import ProjectsReducer from "./reducers/ProjectsReducer";

const ModalContext = createContext();
const ProjectContext = createContext();

export const ContextProvider = props => {
  return (
    <ModalContext.Provider
      value={useReducer(ModalReducer, { create: false })}
    >
      <ProjectContext.Provider
        value={useReducer(ProjectsReducer, [])}
      >
        {props.children}
      </ProjectContext.Provider>
    </ModalContext.Provider>
  );
};

export const useModalValue = () => useContext(ModalContext);
export const useProjectsValue = () =>useContext(ProjectContext);
