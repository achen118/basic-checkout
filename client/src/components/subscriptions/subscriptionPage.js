import React, { Component } from 'react';
import MembershipPlan from '../membershipPlans/membershipPlan';
import '../../styles/subscriptions.css';

export default class SubscriptionPage extends Component {
    componentDidMount() {
        this.props.fetchAllMembershipPlans();
    }

    constructor(props) {
        super(props);
        this.state = {
        };
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
                        <section>
                            <MembershipPlan membershipPlan={ membershipPlan } key={ idx } />
                            <label> # of Guests 
                                <input
                                    defaultValue="0"
                                    id={ membershipPlan.level } />
                            </label>
                            <button>
                                Subscribe Now
                            </button>
                        </section>
                    ))
                }
            </div>
        );
    }
}