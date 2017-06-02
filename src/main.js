import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Todo from './containers/todo';
import createStore from './store/store';

const store = createStore();
render(
    <Provider store={store}>
        <Todo />
    </Provider>,
    document.getElementById('root')
);