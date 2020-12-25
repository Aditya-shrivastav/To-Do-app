import { NOTES } from '../shared/notes';
import * as ActionTypes from './ActionTypes';

export const Notes = (state = NOTES, action) => {

    switch(action.type){
        case ActionTypes.ADD_NOTE :
            var note = action.payload;
            note.id = state.length;
            return state.concat(note)
        default : 
            return state;
    }
}