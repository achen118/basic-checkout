import React, { Component } from 'react';

export default class MembershipPlans extends Component {
    componentDidMount() {
        this.props.fetchAllMembershipPlans();
    }

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        const { membershipPlans } = this.props;
        return (
            <div>
                {
                    membershipPlans.map((membershipPlan, idx) => (
                        <ul 
                            key={ idx }
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
                    ))
                }
            </div>
        );
    }
}