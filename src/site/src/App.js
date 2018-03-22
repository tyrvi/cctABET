import React, { Component } from 'react';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import './App.css';
import { connect } from 'react-redux';
import { authCheckLoggedIn } from './actions/loginActions.js';


class App extends Component {
    componentDidMount() {
        this.props.authCheckLoggedIn();
    }

    render() {
        const Home = this.props.loggedIn ?
            <div><Dashboard /></div> :
            <div><Login /></div>;

        return (
            <div id="App">
                {Home}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheckLoggedIn: () => {
            dispatch(authCheckLoggedIn())
        }
    };
}

const mapStateToProps = state => {
    return {
        loggedIn: state.login.loggedIn,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
