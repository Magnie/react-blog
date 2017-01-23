import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './state/store.js'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
