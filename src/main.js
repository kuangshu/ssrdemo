import React from 'react';
import { render } from 'react-dom';
import Hello from './hello'

const store = createStore();
render(
    <Hello/>,
    document.getElementById('root')
);