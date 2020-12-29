import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { Provider } from '../context/context.js';

ReactDOM.render(
    <Provider>
    <App/>
    </Provider>, document.getElementById('root'));