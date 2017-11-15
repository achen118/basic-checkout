import React, { Component } from 'react';
import MembershipPlansContainer from '../membershipPlans/membershipPlansContainer';
import '../../styles/subscriptions.css';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        console.log(localStorage);
        return (
            <div className="subscription-page-container">
                <MembershipPlansContainer />
            </div>
        );
    }
}