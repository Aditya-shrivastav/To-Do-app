import { createStore, combineReducers } from 'redux';
import { InitialState, Notes } from './reducer';

export const ConfigureStore = () => {

    const store = createStore(
       Notes
    )

    return store;
}