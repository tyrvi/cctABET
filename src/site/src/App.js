import React, { Component } from 'react';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import './App.css';
import { connect } from 'react-redux';
import { authCheckLoggedIn } from './actions/loginActions.js';
import Form from './components/Form.js';
const feature = "Forms";

class App extends Component {
    componentDidMount() {

        if (feature !==  "Forms") {
            this.props.authCheckLoggedIn();
        }

    }

    render() {
        let Home;
        if (feature === "Forms") {
            Home = <div><Form /></div>
        } else {
            Home = this.props.loggedIn ?
                <div><Dashboard {...this.props} /></div> :
                <div><Login {...this.props} /></div>;
        }

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
