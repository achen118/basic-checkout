import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

export default class AuthForm extends Component {
    componentDidMount() {
        document.getElementById('email-input').focus();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.clearErrors();
        }
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
        const { pathname } = this.props.location;
        const formAction = pathname === "/signup" ? "Sign Up" : "Login";
        return (
            <div className="auth-container">
                <section className="auth-form-header">
                    <h3
                        className="auth-form-title">
                        { formAction }
                    </h3>
                    <p className="switch-form-text">
                        {
                            pathname === "/signup" ? 
                            "Already a member?" : 
                            "Not a member?"
                        }
                    </p>
                    <Link
                        className="switch-form-link"
                        to={ pathname === "/signup" ? "/login" : "/signup" }>
                        { pathname === "/signup" ? "Login" : "Sign Up" }
                    </Link>
                </section>
                <form 
                    className="auth-form"
                    onSubmit={ this.handleSubmit }>
                    <input
                        id="email-input"
                        value={ this.state.email }
                        onChange={ this.handleUpdate('email') }
                        placeholder="Email address"
                        type="email" />

                    <input
                        value={ this.state.password }
                        onChange={ this.handleUpdate('password') }
                        placeholder="Password"
                        type="password" />
                    {
                        errors.map((error, idx) => (
                            <li 
                                className="auth-error"
                                key={ idx }>
                                { error }
                            </li>
                        ))
                    }
                    <input 
                        className="submit-button"
                        value={ formAction }
                        type="submit" />
                </form>
            </div>
        );
    }
}