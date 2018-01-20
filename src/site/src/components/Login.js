import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    handleUserChange(event) {
        this.setState({user: event.target.value});
    }

    handlePassChange(event) {
        this.setState({pass: event.target.value});
    }

    onLoginClick() {
        console.log("Login attempt");
        
        let esc = encodeURIComponent;
        let query = Object.keys(this.state).map(k => esc(k) + '=' + esc(this.state[k])).join('&');
        console.log(query);

        // fetch("/authenticate?" + query, {
        //     method: 'GET'
        // }).then(res => res.json())
        // .catch(error => console.error('Error: ', error))

    }

    render() {
        return (
            <div id="Login">
                <div>
                    <input type="text" name="username" value={this.state.user} 
                    onChange={this.handleUserChange} placeholder="Username"/>
                </div>
                <div>
                    <input type="password" name="password" value={this.state.pass} 
                    onChange={this.handlePassChange} placeholder="Password"/>
                </div>
                <div>
                    <button onClick={this.onLoginClick}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;