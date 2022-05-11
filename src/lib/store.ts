import {createStore} from 'redux';
import {Todo} from './api';

// REDUCER
const reducer = (
    state: Todo[] = [],
    action: {type: "TODOS_FETCH_SUCCEEDED"; payload: Todo[]}
) => {
    switch (action.type) {
        case "TODOS_FETCH_SUCCEEDED":
            return action.payload
            break
        default:
            return state;
    }
}

// STORE
export const store = createStore(reducer);