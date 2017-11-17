import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './checkoutForm';
import '../../styles/checkout.css';

export default class CheckoutPage extends Component {
    componentDidMount() {
        this.props.fetchAllMembershipPlans().then(() => console.log("here"));
        const { membershipPlanId, quantity, guests } = this.props.match.params;
        this.setState({
            membershipPlanId: membershipPlanId,
            guests: guests
        }); 
    }

    componentWillReceiveProps(nextProps) {
        const { membershipPlans } = nextProps;
        const { membershipPlanId } = this.state;
        if (membershipPlans.allIds.length > 0 &&
            membershipPlans.allIds !== this.props.membershipPlans.allIds) {
            this.name = membershipPlans.byId[membershipPlanId].name;
            this.amount = membershipPlans.byId[membershipPlanId].amount / 100;
            this.guestCost = 0;
            this.setState({
                amount: (this.amount + (this.state.guests * this.guestCost)).toFixed(2)
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            membershipPlanId: "",
            guests: "",
            amount: "",
            stripeToken: ""
        };
        this.addSubscription = this.addSubscription.bind(this);
        this.receiveStripeToken = this.receiveStripeToken.bind(this);
    }

    addSubscription() {
        this.props.addSubscription({
            membership_plan_id: this.state.membershipPlanId,
            guests: this.state.guests,
            amount: this.state.amount,
            stripe_token: this.state.stripeToken
        });
    }

    receiveStripeToken(token) {
        this.setState({
            stripeToken: token
        }, () => this.addSubscription());
    }

    render() {
        return (
            <div className="checkout-container">
                <h2 className="checkout-page-title">
                    { `${this.name} Subscription` }
                </h2>
                <ul>
                    <li>
                        { `Monthly Cost: $${this.amount}` }
                    </li>
                    <li>
                        { `${this.state.guests} guests x $${this.guestCost}` }
                    </li>
                    <li>
                        { `Total Cost: $${this.state.amount}` }
                    </li>
                </ul>
                <Elements>
                    <CheckoutForm receiveStripeToken={ this.receiveStripeToken }  />
                </Elements>
            </div>
        );
    }
}