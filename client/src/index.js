import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import './styles/reset.css';
import Root from './components/Root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (localStorage.authToken) {
        const user = jwtDecode(localStorage.getItem('authToken'));
        // Need to verify jwt
        const preloadedState = {
            currentUser: user
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store } />, root);
});