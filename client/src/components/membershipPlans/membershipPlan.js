import React, { Component } from 'react';
import '../../styles/membershipPlans.css';

export default class MembershipPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: 0
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    handleUpdate(event) {
        this.setState({
            guests: event.target.value
        });
    }

    handleSubscribe() {

    }

    render() {
        const { membershipPlan, subscription } = this.props;
        let subscriptionCost;
        let subscriptionGuests;
        if (subscription) {
            subscriptionCost = subscription.cost;
            subscriptionGuests = subscription.guests;
        }
        return (
                <ul 
                    className="membership-plan-ul">
                    <section className="membership-plan-li">
                        <li
                            className="membership-plan-level">
                            { membershipPlan.level }
                        </li>
                        <li
                            className="membership-plan-cost">
                            { `$${membershipPlan.cost} / month` }
                        </li>
                        <li
                            className="membership-plan-description">
                            { membershipPlan.description }
                        </li>
                    </section>
                    <section 
                        className={ subscription ? "unsubscribed hidden" : "unsubscribed" }>
                        <p>Number of Guests:</p>
                        <input
                            value={ this.state.guests }
                            onChange={ this.handleUpdate }
                            id={membershipPlan.level} />
                        <button
                            className="subscribe-button"
                            onClick={ this.handleSubscribe }>
                            Subscribe Now
                        </button>
                    </section>
                    <section 
                        className={ subscription ? "subscribed" : "subscribed hidden" }>
                        <p>Subscribed</p>
                        <p>{`$${subscriptionCost} / month`}</p>
                        <p>{`${subscriptionGuests} guests`}</p>
                    </section>
                </ul>
        );
    }
}