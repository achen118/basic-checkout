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
        const { membershipPlan } = this.props;
        return (
            <ul 
                className="membership-plan-ul">
                <li
                    className="membership-plan-level">
                    { membershipPlan.level }
                </li>
                <li
                    className="membership-plan-description">
                    { membershipPlan.description }
                </li>
                <li
                    className="membership-plan-cost">
                    { membershipPlan.cost }
                </li>
                <label> # of Guests
                    <input
                        value={ this.state.guests }
                        onChange={ this.handleUpdate }
                        id={membershipPlan.level} />
                </label>
                <button
                    onClick={ this.handleSubscribe }>
                    Subscribe Now
                </button>
            </ul>
        );
    }
}