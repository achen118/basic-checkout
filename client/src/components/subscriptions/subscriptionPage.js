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
        this.getSubscription = this.getSubscription.bind(this);
    }

    getSubscription(membershipPlanId) {
        const { subscriptions } = this.props;
        if (subscriptions.allMembershipPlanIds && subscriptions.allMembershipPlanIds.includes(membershipPlanId)) {
            return subscriptions.byMembershipPlanId[membershipPlanId];
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
                        <MembershipPlan membershipPlan={ membershipPlan } subscription={ this.getSubscription(membershipPlan.id) } key={ idx } />
                    ))
                }
            </div>
        );
    }
}