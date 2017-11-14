import React, { Component } from 'react';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formAction = this.props.location.pathname === "/signup" ? "Sign Up" : "Login";
    }

    handleUpdate(key) {
        return event => {
            this.setState({
                [key]: event.target.value
            });
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.location.pathname === "/signup") {
            this.props.signUp(this.state);
        } else {
            this.props.login(this.state);
        }
    }

    render() {
        const { pathname } = this.props.location;
        const { email, password } = this.state;
        return (
            <div>
                <header>
                    <h1>{ this.formAction }</h1>
                </header>
                <form onSubmit={ this.handleSubmit }>
                    <input
                        value={ email }
                        onChange={ this.handleUpdate('email') }
                        placeholder="Email address"
                        type="email" />

                    <input
                        value={ password }
                        onChange={ this.handleUpdate('password') }
                        placeholder="Password"
                        type="password" />
                    <input 
                        value={ this.formAction }
                        type="submit" />
                </form>
            </div>
        );
    }
}