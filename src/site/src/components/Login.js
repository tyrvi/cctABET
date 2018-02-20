import React, { Component } from 'react';
import './Login.css';
import { authLogin } from '../actions/actions';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                user: '',
                pass: '',
            },
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
            <div id="Login">
            <div class="background"></div>
            <div class="userEntry">
                <h1>CCT ABET</h1>
                <div>
                    <input type="text" value={this.state.user}
                        onChange={event => this.setState({ user: event.target.value })}
                        placeholder="Username" />
                </div>
                <div>
                    <input type="password" value={this.state.pass}
                        onChange={event => this.setState({ pass: event.target.value })}
                        placeholder="Password" />
                </div>
                <div>
                    <p className={this.state.retry ? "visible" : "hidden"} >
                        Incorrect username/password
                    </p>
                </div>
                <div>
                    <button onClick={this.onLoginClick}>Login</button>
                </div>
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
