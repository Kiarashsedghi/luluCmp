import React, { createContext, useReducer, useContext } from "react";
import ModalReducer from "./reducers/ModalReducer";
import ProjectsReducer from "./reducers/ProjectsReducer";
import ThemeReducer from './reducers/ThemeReducer'

const ModalContext = createContext();
const ProjectContext = createContext();
const ThemeContext = createContext();

export const ContextProvider = props => {
  return (
    <ThemeContext.Provider value={useReducer(ThemeReducer , 'light')}>
      <ModalContext.Provider
        value={useReducer(ModalReducer, { create: false })}
      >
        <ProjectContext.Provider
          value={useReducer(ProjectsReducer, [])}
        >
          {props.children}
        </ProjectContext.Provider>
      </ModalContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useModalValue = () => useContext(ModalContext);
export const useProjectsValue = () => useContext(ProjectContext);
export const useThemeValue = () => useContext(ThemeContext);
