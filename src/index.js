import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore, compose } from 'redux';
import reducers from './reducers';

import App from './components/App';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);