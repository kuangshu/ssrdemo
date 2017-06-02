import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../rootReducers.js';

const loggerMiddleware = createLogger();
export default function Store(initState) {
    const ENV = process.env.NODE_ENV || 'development';
    if (ENV === 'development') {
        return createStore(
            combineReducers({
                ...rootReducer,
            }),
            initState,
            applyMiddleware(
                thunkMiddleware, // 允许我们 dispatch() 函数
                loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
            ),
            window.devToolsExtension ? window.devToolsExtension() : undefined
        );
    }
    return createStore(rootReducer, initState, undefined);
}