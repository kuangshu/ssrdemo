import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Todo from './containers/todo';
import createStore from './store/store';

let store;

if(typeof window === 'undefined') {
    store = createStore();
} else {
    const initState = window.__initState;
    store = createStore(initState);
}
const Root = () => (
    <Provider store={store}>
        <Todo />
    </Provider>
);

export {
    Root
};