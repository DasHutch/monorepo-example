import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { middleware as fetchMiddleware } from 'react-redux-fetch';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

function configureStoreProd(rootReducer: any, rootSaga: any, initialState: any | undefined) {
    const middlewares: any[] = [fetchMiddleware, sagaMiddleware];

    const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));

    sagaMiddleware.run(rootSaga);

    return store;
}

function configureStoreDev(rootReducer: any, rootSaga: any, initialState: any | undefined) {
    const middlewares: any[] = [
        // TODO: Add other middleware on this line...
        //       Redux middleware that spits an error on you when you
        //       try to mutate your state either inside a dispatch
        //       or between dispatches.
        logger,
        reduxImmutableStateInvariant(),
        fetchMiddleware,
        sagaMiddleware,
    ];

    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // TODO: Add support for Redux dev tools
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
