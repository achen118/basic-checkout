import React, { Component } from 'react';
import MembershipPlanContainer from '../membershipPlans/membershipPlanContainer';
import '../../styles/subscriptions.css';

export default class SubscriptionPage extends Component {
    componentDidMount() {
        this.props.fetchAllMembershipPlans();
        // this.props.fetchAllSubscriptions();
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
        console.log(this.props);
        const { membershipPlans, errors } = this.props;
        return (
            <div className="subscription-page-container">
                <h2 className="subscription-page-title">
                    My Subscription Page
                </h2>
                <ul className="subscription-page-errors">
                    {
                        errors.map((error, idx) => <li key={ idx }>{ error }</li>)
                    }
                </ul>
                {
                    membershipPlans.allIds.map((membershipPlanId, idx) => (
                        <MembershipPlanContainer 
                            membershipPlan={ membershipPlans.byId[membershipPlanId] } 
                            subscription={ this.getSubscription(membershipPlanId) } 
                            key={ idx } />
                    ))
                }
            </div>
        );
    }
}