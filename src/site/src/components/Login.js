import React, { Component } from 'react';
import './Login.css';
import { authenticate } from '../actions/actions';
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

        if (!this.state.user || !this.state.pass) {
            console.log("no username or password");
            this.setState({retry: true});
            return;
        }

        this.props.authenticate(this.state.user, this.state.pass);
    }

    render() {
        return (
            <div id="Login">
                <h1>CCT ABET</h1>
                <div>
                    <input type="text" value={this.state.user}
                    onChange={event => this.setState({user: event.target.value})}
                    placeholder="Username"/>
                </div>
                <div>
                    <input type="password" value={this.state.pass}
                    onChange={event => this.setState({pass: event.target.value})}
                    placeholder="Password"/>
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
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (user, pass) => {
            dispatch(authenticate(user, pass))
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Login);