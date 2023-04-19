import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './globalStyle';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from './redux/reducers';

const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
    <GlobalStyle>
        <Provider store={store}>
            <App />
        </Provider>
    </GlobalStyle>,
    // </React.StrictMode>
);
