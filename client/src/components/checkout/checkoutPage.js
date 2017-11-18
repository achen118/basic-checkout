import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './checkoutForm';
import '../../styles/checkout.css';

export default class CheckoutPage extends Component {
    componentDidMount() {
        this.props.fetchSubscription();
        this.props.fetchMembershipPlan(this.props.match.params.membershipPlanId);
    }
    
    constructor(props) {
        super(props);
        this.state = {
            stripeToken: ""
        };
        this.addSubscription = this.addSubscription.bind(this);
        this.receiveStripeToken = this.receiveStripeToken.bind(this);
    }
    
    addSubscription() {
        const { membershipPlanId, quantity } = this.props.match.params;
        this.props.addSubscription({
            membership_plan_id: membershipPlanId,
            quantity: quantity,
            stripe_token: this.state.stripeToken
        }).then(
            () => this.props.history.push('/subscriptions'), 
            errors => this.props.receiveErrors(["You are already subscribed"])
        );
    }
    
    receiveStripeToken(token) {
        this.setState({
            stripeToken: token
        }, () => this.addSubscription());
    }
    
    render() {
        const { membershipPlan, errors, subscription } = this.props;
        const { guests } = this.props.match.params;
        let checkoutInfo;
        let checkoutForm = 
            <button
                className="update-sub-button"
                onClick={ this.addSubscription }>
                Confirm subscription with previous credit card
            </button>;
        if (!subscription) {
            checkoutForm = 
                <Elements>
                    <CheckoutForm
                        receiveErrors={ this.props.receiveErrors }
                        receiveStripeToken={ this.receiveStripeToken } />
                </Elements>;
        }
        if (membershipPlan) {
            const guestCost = membershipPlan.name === "Basic" ? 
                              membershipPlan.amount / 100 : 0;
            const totalCost = (guests * guestCost 
                            + membershipPlan.amount / 100).toFixed(2);
            checkoutInfo = 
                <div className="checkout-container">
                    <h2 className="checkout-page-title">
                        { `${membershipPlan.name} Subscription` }
                    </h2>
                    <ul className="checkout-info">
                        <li>
                            { `Monthly Cost: $${membershipPlan.amount / 100}` }
                        </li>
                        <li>
                            {`${guests} guests x $${guestCost} = $${guests * guestCost}` }
                        </li>
                        <li>
                            { `Total Cost: $${totalCost}` }
                        </li>
                    </ul>
                    <ul>
                        {
                            errors.map((error, idx) => (
                                <li key={ idx }>
                                    { error }
                                </li>
                            ))
                        }
                    </ul>
                    { checkoutForm }
                </div>;
        }
        return (
            <div>
                { checkoutInfo }
            </div>
        );
    }
}