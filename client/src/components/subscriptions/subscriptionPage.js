import React, { Component } from 'react';
import MembershipPlan from '../membershipPlans/membershipPlan';
import '../../styles/subscriptions.css';

export default class SubscriptionPage extends Component {
    componentDidMount() {
        this.props.fetchAllMembershipPlans();
        this.props.fetchSubscription();
        window.mixpanel.track("Visit");
    }

    render() {
        const { membershipPlans, errors } = this.props;
        return (
            <div className="subscription-page-container">
                <h2 className="subscription-page-title">
                    My Subscription Page
                </h2>
                <ul className="subscription-page-errors">
                    {
                        errors.map((error, idx) => (
                            <li key={ idx }>
                                { error }
                            </li>
                        ))
                    }
                </ul>
                {
                    membershipPlans.allIds.map((membershipPlanId, idx) => (
                        <MembershipPlan
                            membershipPlan={ membershipPlans.byId[membershipPlanId] } 
                            subscription={ this.props.subscription } 
                            history={ this.props.history }
                            key={ idx } />
                    ))
                }
            </div>
        );
    }
}