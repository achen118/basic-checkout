import React, { Component } from 'react';
import MembershipPlan from '../membershipPlans/membershipPlan';
import '../../styles/subscriptions.css';

export default class SubscriptionPage extends Component {
    componentDidMount() {
        this.props.fetchAllMembershipPlans();
        this.props.fetchAllSubscriptions();
    }

    constructor(props) {
        super(props);
        this.isSubscribed = this.isSubscribed.bind(this);
    }

    isSubscribed(membershipPlanId) {
        const { subscriptions } = this.props;
        if (subscriptions.allMembershipPlanIds.includes(membershipPlanId)) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { membershipPlans } = this.props;
        return (
            <div className="subscription-page-container">
                <h2 className="subscription-page-title">
                    My Subscription Page
                </h2>
                {
                    membershipPlans.map((membershipPlan, idx) => (
                        <MembershipPlan membershipPlan={ membershipPlan } isSubscribed={ this.isSubscribed(membershipPlan.id) } key={ idx } />
                    ))
                }
            </div>
        );
    }
}