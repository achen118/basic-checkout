import React, { Component } from 'react';
import '../../styles/membershipPlans.css';

export default class MembershipPlans extends Component {
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
            </ul>
        );
    }
}