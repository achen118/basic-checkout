import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import AuthFormContainer from './auth/authFormContainer';
import SubscriptionPageContainer from './subscriptions/subscriptionPageContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <ProtectedRoute exact path="/subscriptions" component={ SubscriptionPageContainer } />
                    <AuthRoute exact path="/" component={ AuthFormContainer } />
                    <AuthRoute exact path="/login" component={ AuthFormContainer } />
                    <AuthRoute exact path="/signup" component={ AuthFormContainer } />
                </Switch>
            </div>
        );
    }
}