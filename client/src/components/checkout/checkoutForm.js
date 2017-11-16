import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.stripe.createToken().then(payload => console.log(payload));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>Confirm order</button>
            </form>
        );
    }
}

export default injectStripe(CheckoutForm);