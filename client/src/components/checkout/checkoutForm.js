import React, { Component } from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.stripe.createToken()
            .then(payload => {
                if (payload.token) {
                    this.props.receiveStripeToken(payload.token.id);
                } else {
                    this.props.receiveErrors(["Invalid credit card information"]);
                }
            });
    }

    render() {
        return (
            <form 
                className="cc-form"
                onSubmit={ this.handleSubmit }>
                <CardElement 
                    className="card"
                    style={{ base: { 
                        fontSize: '22px',
                        color: '#19334A'
                    } }} />
                <button className="confirm-sub-button">
                    Confirm Subscription
                </button>
            </form>
        );
    }
}

export default injectStripe(CheckoutForm);