import React, { Component } from 'react';
import './Login.css';

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

        let esc = encodeURIComponent;
        let query = Object.keys(this.state.userInfo).map(k => esc(k) + '=' + esc(this.state[k])).join('&');
        //var headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        //headers.append('Accept', 'application/json');
        //headers.append('Access-Control-Allow-Origin');
        // console.log(query);

        fetch("http://localhost:3001/authenticate?" + query, {
            method: 'GET',
            //headers: headers
        }).then(res => res.json())
        .then(json => {
            if (json.valid) {
                console.log("valid user info");
                /*
                Do something...
                Need to use redux and react router to redirect
                */
            } else {
                console.log("invalid user info")
                this.setState({retry: true});
            }
        })
        .catch(error => console.error('Error: ', error))
    }

    render() {
        return (
            <div id="Login">
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
                {/* <div>
                    <a href="/auth/provider">Log In with OAuth Provider</a>
                </div> */}
            </div>
        );
    }
}

export default Login;