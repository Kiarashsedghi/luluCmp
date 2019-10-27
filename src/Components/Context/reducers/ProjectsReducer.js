import { ADD_PROJECT, ON_CHANGE_TEXTAREA, REMOVE_PROJECT } from "../ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      console.log("adding project" ,action.payload);
      return [...state, action.payload];
    case ON_CHANGE_TEXTAREA :
      return  [...state.map(p => p.id ===action.payload.id ? {...p,value:action.payload.value} : p)]
      case REMOVE_PROJECT :
        return state.filter(p=>p.id!==action.payload)
        // return state.filter(p=> p.id!==action.payload.id)
  }
};
