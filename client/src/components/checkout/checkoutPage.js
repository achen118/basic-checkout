import React, { Component } from 'react';

export default class CheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(this.props);
        return (
            <div className="checkout-container">
                Hello World
            </div>
        );
    }
}