import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './checkoutForm';
import '../../styles/checkout.css';

export default class CheckoutPage extends Component {
    componentDidMount() {
        const { membershipPlanId, quantity, guests } = this.props.match.params;
        this.props.fetchSubscription();
        this.props.fetchMembershipPlan(membershipPlanId)
            .then(() => {
                this.setState({
                    membershipPlanId: membershipPlanId,
                    guests: guests,
                    quantity: quantity
                }); 
            });
    }
    
    constructor(props) {
        super(props);
        this.state = {
            membershipPlanId: "",
            guests: "",
            quantity: "",
            stripeToken: ""
        };
        this.addSubscription = this.addSubscription.bind(this);
        this.receiveStripeToken = this.receiveStripeToken.bind(this);
    }
    
    addSubscription() {
        this.props.addSubscription({
            membership_plan_id: this.state.membershipPlanId,
            quantity: this.state.quantity,
            stripe_token: this.state.stripeToken
        }).then(
            () => this.props.history.goBack(), 
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
                        receiveStripeToken={this.receiveStripeToken} />
                </Elements>;
        }
        if (membershipPlan) {
            const guestCost = membershipPlan.name === "Basic" ? 
                              membershipPlan.amount / 100 : 0;
            const totalCost = (this.state.guests * guestCost 
                            + membershipPlan.amount / 100).toFixed(2);
            checkoutInfo = 
                <div className="checkout-container">
                    <h2 className="checkout-page-title">
                        { `${membershipPlan.name} Subscription` }
                    </h2>
                    <ul>
                        <li>
                            { `Monthly Cost: $${membershipPlan.amount / 100}` }
                        </li>
                        <li>
                            {`${this.state.guests} guests x $${guestCost}` }
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