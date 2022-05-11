import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import {Todo, getTodos} from './api';
import {put, takeEvery} from "redux-saga/effects";

// SAGA
function* getTodosAction() {
    const todos: Todo[] = yield getTodos();
    yield put({ type: "TODOS_FETCH_SUCCEEDED", payload: todos});
}
function* rootSaga(){
    yield takeEvery("TODOS_FETCH_REQUESTED", getTodosAction);
}

// REDUCER
export const reducer = (
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
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
// console.log('xx store ', store);
