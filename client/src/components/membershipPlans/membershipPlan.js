import React, { Component } from 'react';
import '../../styles/membershipPlans.css';

export default class MembershipPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: 0,
            quantity: 1
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    handleUpdate(event) {
        if (this.props.membershipPlan.name === "Basic") {
            this.setState({
                guests: event.target.value,
                quantity: parseInt(event.target.value) + 1
            });
        } else {
            this.setState({
                guests: event.target.value
            });
        }
    }

    handleSubscribe(event) {
        const { membershipPlan } = this.props;
        if (membershipPlan.name !== "Basic" && 
            this.state.guests > 5) {
            this.props.receiveErrors([{ [membershipPlan.id]: "5 guests maximum" }]);
        } else {
            this.props.clearErrors();
            let guests = 0;
            let quantity = this.state.quantity || 0;
            if (this.state.guests) {
                guests = parseInt(this.state.guests);
            }
            this.props.history.push(`/checkout/${membershipPlan.id}/${quantity}/${guests}`);
        }
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
                            { membershipPlan.name }
                        </li>
                        <li
                            className="membership-plan-cost">
                            { `$${membershipPlan.amount / 100} / month` }
                        </li>
                        <li
                            className="membership-plan-description">
                            { membershipPlan.metadata.description }
                        </li>
                    </section>
                    <section 
                        className={ subscription ? "unsubscribed hidden" : "unsubscribed" }>
                        <p>Number of Guests:</p>
                        {
                            membershipPlan.name === "Basic" ?
                            <input
                                value={ this.state.guests }
                                onChange={ this.handleUpdate } /> :
                            <select className="guest-select" onChange={ this.handleUpdate }>
                                <option value="0">
                                    0
                                </option>
                                <option value="1">
                                    1
                                </option>
                                <option value="2">
                                    2
                                </option>
                                <option value="3">
                                    3
                                </option>
                                <option value="4">
                                    4
                                </option>
                                <option value="5">
                                    5
                                </option>
                            </select>
                        }
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