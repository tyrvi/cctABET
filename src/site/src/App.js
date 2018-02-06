import React, { Component } from 'react';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import './App.css';
import { connect } from 'react-redux';
import { checkLoggedIn } from './actions/actions.js';

class App extends Component {

    // TO-DO check if user is already logged in
    componentDidMount() {
        this.props.checkLoggedIn();
    }

    render() {
        const Home = this.props.loggedIn ?
            <div><Dashboard {...this.props} /></div> :
            <div><Login {...this.props} /></div>;

        return (
            <div>
                {Home}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkLoggedIn: () => {
            dispatch(checkLoggedIn())
        }
    };
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
