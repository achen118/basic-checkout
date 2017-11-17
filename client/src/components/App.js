import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import AuthFormContainer from './auth/authFormContainer';
import HeaderContainer from './header/headerContainer';
import SubscriptionPageContainer from './subscriptions/subscriptionPageContainer';
import CheckoutPageContainer from './checkout/checkoutPageContainer';
import '../styles/App.css';

export default class App extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            console.log("yes");
        }
    }

    render() {
        return (
            <div className="app">
                <Route path="/" component={ HeaderContainer } />
                <Switch>
                    <ProtectedRoute exact path="/subscriptions" component={ SubscriptionPageContainer } />
                    <ProtectedRoute exact path="/checkout/:membershipPlanId/:quantity/:guests" component={ CheckoutPageContainer } />
                    <AuthRoute exact path="/" component={ AuthFormContainer } />
                    <AuthRoute exact path="/login" component={ AuthFormContainer } />
                    <AuthRoute exact path="/signup" component={ AuthFormContainer } />
                </Switch>
            </div>
        );
    }
}