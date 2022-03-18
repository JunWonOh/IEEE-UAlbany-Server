import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import history from 'history/browser';
var domain = process.env.REACT_APP_AUTH0_DOMAIN;
var clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
var onRedirectCallback = function (appState) {
    history.push(appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.href = window.location.origin + "/dashboard");
};
ReactDOM.render(React.createElement(Auth0Provider, { domain: domain, clientId: clientId, redirectUri: window.location.origin },
    React.createElement(App, null)), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
