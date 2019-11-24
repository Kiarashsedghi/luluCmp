import {
  TOGGLE_MODAL,
  ADD_PROJECT,
  ON_CHANGE_TEXTAREA,
  REMOVE_PROJECT,
  CHANGE_THEME

} from "./ActionTypes";

export const toggleModal = modalType => {
  return {
    type: TOGGLE_MODAL,
    payload: modalType
  };
};
export const addProject = project => ({
  type: ADD_PROJECT,
  payload: project
});
export const onChangeTextArea = (value, id) => ({
  type: ON_CHANGE_TEXTAREA,
  payload: { value, id }
});
export const removeProject = id => ({
  type: REMOVE_PROJECT,
  payload: id
});
export const changeTheme = (theme)=>(
  {
    type:CHANGE_THEME,
    payload: theme
  }
)
