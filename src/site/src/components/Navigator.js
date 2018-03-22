import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import { authCheckLoggedIn } from '../actions/loginActions.js';
import { PAGES } from '../actions/pageActions.js';

class Navigator extends Component {
    componentDidMount() {
        this.props.authCheckLoggedIn();
    }

    render() {
        const Home = this.props.loggedIn ?
            <div><Dashboard /></div> :
            <div><Login /></div>;

        if (this.props.loggedIn) {

        }

        return (
            <div id="Navigator">
                {Home}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.login.loggedIn,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        authCheckLoggedIn: () => {
            dispatch(authCheckLoggedIn())
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigator);
