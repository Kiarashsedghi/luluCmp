import { TOGGLE_MODAL, ADD_PROJECT, ON_CHANGE_TEXTAREA } from "./ActionTypes";

export const toggleModal = (modalType) => {
  return {
      type : TOGGLE_MODAL, payload:modalType
  };
};
export const addProject = (project) => ({
    type:ADD_PROJECT , payload:project
})
export const onChangeTextArea = (value) =>({
  type : ON_CHANGE_TEXTAREA , payload : value
})