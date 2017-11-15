import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AuthForm extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const { errors } = this.props;
        console.log(errors);
        const { pathname } = this.props.location;
        const formAction = pathname === "/signup" ? "Sign Up" : "Login";
        return (
            <div>
                <header>
                    <h1>{ formAction }</h1>
                </header>
                <form onSubmit={ this.handleSubmit }>
                    <input
                        value={ this.state.email }
                        onChange={ this.handleUpdate('email') }
                        placeholder="Email address"
                        type="email" />

                    <input
                        value={ this.state.password }
                        onChange={ this.handleUpdate('password') }
                        placeholder="Password"
                        type="password" />
                    <input 
                        value={ formAction }
                        type="submit" />
                </form>
                {
                    errors.map((error, idx) => <li key={ idx }>{ error }</li>)
                }
                <Link to={ pathname === "/signup" ? "/login" : "/signup" }>
                    { pathname === "/signup" ? "Login" : "Sign Up" }
                </Link>
            </div>
        );
    }
}