import * as ActionTypes from './ActionTypes';

export const addNote = (noteId, title, description) => ({
    type: ActionTypes.ADD_NOTE,
    payload : {
        noteId: noteId,
        title: title,
        description: description
    }
});