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
        this.isSubscribed = this.isSubscribed.bind(this);
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

    isSubscribed() {
        const { subscription, membershipPlan } = this.props;
        if (subscription && subscription.plan) {
            if (subscription.plan.id === membershipPlan.id) {
                this.subscriptionCost = subscription.plan.amount / 100 * subscription.quantity;
                return true;
            }
        } else if (subscription && subscription.items.data.length > 1) {
            for (let i = 0; i < subscription.items.data.length; i++) {
                if (subscription.items.data[i].plan.id === membershipPlan.id) {
                    this.subscriptionCost = subscription.items.data[i].plan.amount / 100 * subscription.items.data[i].quantity;
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    handleSubscribe(event) {
        const { membershipPlan, history } = this.props;
        let guests = 0;
        let quantity = this.state.quantity || 0;
        if (this.state.guests) {
            guests = parseInt(this.state.guests);
        }
        history.push(`/checkout/${membershipPlan.id}/${quantity}/${guests}`);
    }

    render() {
        const { membershipPlan, subscription } = this.props;
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
                        className={ this.isSubscribed() ? "unsubscribed hidden" : "unsubscribed" }>
                        <p>Number of Guests:</p>
                        {
                            membershipPlan.name === "Basic" ?
                            <input
                                value={ this.state.guests }
                                onChange={ this.handleUpdate } /> :
                            <select className="guest-select" onChange={ this.handleUpdate }>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        }
                        <button
                            className="subscribe-button"
                            onClick={ this.handleSubscribe }>
                            Subscribe Now
                        </button>
                    </section>
                    <section 
                        className={ this.isSubscribed() ? "subscribed" : "subscribed hidden" }>
                        <p>Subscribed</p>
                        <p>{`$${this.subscriptionCost} / month`}</p>
                    </section>
                </ul>
        );
    }
}