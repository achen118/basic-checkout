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
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleUpdate(event) {
        this.setState({
            guests: event.target.value
        });
    }

    handleSubscribe(event) {
        const { membershipPlan } = this.props;
        if (membershipPlan.level !== "Basic" && 
            this.state.guests > 5) {
            this.props.receiveErrors([{ [membershipPlan.id]: "5 guests maximum" }]);
        } else {
            this.props.clearErrors();
            this.props.history.push(`/checkout/${event.target.id}/${this.state.guests}`);
        }
    }

    renderErrors(event) {
        const errors = [];
        this.props.errors.forEach(error => {
            const membershipPlanId = parseInt(Object.keys(error)[0]);
            if (membershipPlanId === this.props.membershipPlan.id) {
                errors.push(error[membershipPlanId]);
            }
        });
        return errors;
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
                            id={ membershipPlan.level } />
                        <button
                            id={ membershipPlan.id }
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
                    <ul>
                        { 
                            this.renderErrors().map((error, idx) => (
                                <li
                                    className="subscription-error"
                                    key={ idx }>
                                    { error }
                                </li>
                            )) 
                        }
                    </ul>
                </ul>
        );
    }
}