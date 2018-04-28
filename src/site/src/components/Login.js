import React, { Component } from 'react';
import './styles/Login.css';
import { authLogin } from '../actions/loginActions.js';
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pass: '',
            retry: false,
        };

        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick() {
        console.log("Login attempt");

        // don't authenticate if user or pass is not provided
        if (!this.state.email || !this.state.pass) {
            this.setState({ retry: true });
            return;
        }

        this.props.authLogin(this.state.email, this.state.pass);
    }

    render() {
        return (
            <div id="Login">
                <h1>CCT ABET</h1>
                <div>
                    <input className="_input _input-1"
                        type="email" value={this.state.email} name="email"
                        onChange={event => this.setState({ email: event.target.value })}
                        placeholder="Email" />
                </div>
                <div>
                    <input className="_input _input-2"
                        type="password" value={this.state.pass} name="password"
                        onChange={event => this.setState({ pass: event.target.value })}
                        placeholder="Password" />
                </div>
                <div>
                    <p className={this.state.retry ? "visible" : "hidden"} >
                        Incorrect email/password
                    </p>
                </div>
                <div>
                    <button className="_button"
                        onClick={this.onLoginClick}>Login</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authLogin: (email, pass) => {
            dispatch(authLogin(email, pass))
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Login);
