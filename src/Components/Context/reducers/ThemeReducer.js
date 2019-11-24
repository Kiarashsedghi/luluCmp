import { CHANGE_THEME } from "../ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
  }
};
