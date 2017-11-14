import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import Root from './components/Root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    // check localstorage for auth token
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store } />, root);
});