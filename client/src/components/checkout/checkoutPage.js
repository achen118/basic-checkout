import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './checkoutForm';
import '../../styles/checkout.css';

export default class CheckoutPage extends Component {
    componentDidMount() {
        this.props.fetchAllMembershipPlans();
        const { membershipPlanId, guests } = this.props.match.params;
        this.setState({
            membershipPlanId: membershipPlanId,
            guests: guests
        }); 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.membershipPlans.allIds.length > 0 &&
            nextProps.membershipPlans.allIds !== this.props.membershipPlans.allIds) {
            this.level = nextProps.membershipPlans.byId[this.state.membershipPlanId].level;
            this.cost = nextProps.membershipPlans.byId[this.state.membershipPlanId].cost;
            this.guestCost = nextProps.membershipPlans.byId[this.state.membershipPlanId].guest_cost;
            this.setState({
                cost: (this.cost + (this.state.guests * this.guestCost)).toFixed(2)
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            membershipPlanId: "",
            guests: "",
            cost: "",
            stripeToken: ""
        };
        this.addSubscription = this.addSubscription.bind(this);
        this.receiveStripeToken = this.receiveStripeToken.bind(this);
    }

    addSubscription() {
        this.props.addSubscription({
            membership_plan_id: this.state.membershipPlanId,
            guests: this.state.guests,
            cost: this.state.cost,
            stripe_token: this.state.stripeToken
        });
    }

    receiveStripeToken(token) {
        this.setState({
            stripeToken: token
        }, () => this.addSubscription());
    }

    render() {
        console.log(this.state);
        return (
            <div className="checkout-container">
                <h2 className="checkout-page-title">
                    { `${this.level} Subscription` }
                </h2>
                <ul>
                    <li>
                        { `Monthly Cost: $${this.cost}` }
                    </li>
                    <li>
                        { `${this.state.guests} guests x $${this.guestCost}` }
                    </li>
                    <li>
                        { `Total Cost: $${this.state.cost}` }
                    </li>
                </ul>
                <Elements>
                    <CheckoutForm receiveStripeToken={ this.receiveStripeToken }  />
                </Elements>
            </div>
        );
    }
}