import React, { Component } from 'react';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
    }

    render() {
        console.log(this.props);
        console.log(localStorage);
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={ this.handleLogout }>
                    Logout
                </button>
            </div>
        );
    }
}