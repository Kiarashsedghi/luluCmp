import { TOGGLE_MODAL } from "../ActionTypes";

export default (state , action) =>{
    switch(action.type){
        case TOGGLE_MODAL:
            return {
                ...state,
                [action.payload] : !state[action.payload]
            }
    
    }
}