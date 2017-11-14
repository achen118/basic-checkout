import React, { Component } from 'react';

export default class AuthForm extends Component {
    render() {
        console.log(this.props);
        console.log(localStorage);
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}