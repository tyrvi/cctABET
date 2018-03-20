import React, { Component } from 'react';
import './styles/Login.css';
import { authLogin } from '../actions/loginActions.js';
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            pass: '',
            retry: false,
        };

        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick() {
        console.log("Login attempt");

        // don't authenticate if user or pass is not provided
        if (!this.state.user || !this.state.pass) {
            this.setState({ retry: true });
            return;
        }

        this.props.authLogin(this.state.user, this.state.pass);
    }

    render() {
        return (
            <div class="container">
            <div class="background"></div>
            <div class="userEntry">
                <h1>CCT ABET</h1>

                    <input type="text" value={this.state.user}
                        onChange={event => this.setState({ user: event.target.value })}
                        placeholder="Username" class="email" />

                    <input type="password" value={this.state.pass}
                        onChange={event => this.setState({ pass: event.target.value })}
                        placeholder="Password" class="password"/>

                    <p className={this.state.retry ? "visible" : "hidden"} >
                        Incorrect username/password
                    </p>

                    <button onClick={this.onLoginClick}>Login</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authLogin: (user, pass) => {
            dispatch(authLogin(user, pass))
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Login);
