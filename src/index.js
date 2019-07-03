import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose,combineReducers } from 'redux';
import thunk from 'redux-thunk'
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import loginReducer from './store/reducer/LoginReducer';


const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
 
    login: loginReducer
});
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)) );
const app = (
    <Provider store={store}>
        <App  history={history}/>
    </Provider>
    
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
