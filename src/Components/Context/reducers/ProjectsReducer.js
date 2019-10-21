import { ADD_PROJECT, ON_CHANGE_TEXTAREA } from "../ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      console.log("adding project" ,action.payload);
      return [...state, action.payload];
    case ON_CHANGE_TEXTAREA :
      return [...state , ]
  }
};
