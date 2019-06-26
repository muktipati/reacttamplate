import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createBrowserHistory } from 'history'
import './style/style.css';

const history = createBrowserHistory()

ReactDOM.render(<App history={history}/>, document.getElementById('app'));
