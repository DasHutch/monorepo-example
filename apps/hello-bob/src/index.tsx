import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './app/store/configureStore';
import rootReducer from './packages/rootReducer';
import rootSaga from './packages/rootSaga';
import initialState from './app/config/initialState';

import app from './packages/app';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = configureStore(rootReducer, rootSaga, initialState);
const rootElement = document.getElementById('app-hello-bob') as HTMLElement;

ReactDOM.render(<Provider store={store}><app.components.Layout /></Provider>, rootElement);

registerServiceWorker();
