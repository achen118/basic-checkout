import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { StripeProvider } from 'react-stripe-elements';

const Root = ({ store }) => (
    <Provider store={ store }>
        <HashRouter>
            <StripeProvider apiKey="pk_test_j0LQkmOLylkJ9BVeYS6f5nYe">
                <App />
            </StripeProvider>
        </HashRouter>
    </Provider>
);

export default Root;