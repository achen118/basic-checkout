import React, { Component } from 'react';
import '../../styles/checkout.css';

export default class CheckoutPage extends Component {
    componentDidMount() {
        const { membershipPlanId, guests } = this.props.match.params;
        this.setState({
            membershipPlanId: membershipPlanId,
            guests: guests
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            membershipPlanId: "",
            guests: "",
            cost: ""
        };
        this.addSubscription = this.addSubscription.bind(this);
    }

    addSubscription() {
        this.props.addSubscription({
            membership_plan_id: this.state.membershipPlanId,
            guests: this.state.guests,
            cost: this.state.cost
        });
    }

    render() {
        const { membershipPlans } = this.props;
        // const level = membershipPlans
        return (
            <div className="checkout-container">
                <h2 className="checkout-page-title">
                </h2>
            </div>
        );
    }
}