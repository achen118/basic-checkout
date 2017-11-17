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
                }
            });
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <CardElement style={{ base: { fontSize: '18px' } }} />
                <button>Confirm subscription</button>
            </form>
        );
    }
}

export default injectStripe(CheckoutForm);