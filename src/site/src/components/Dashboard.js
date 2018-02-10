import React, { Component } from 'react';
import './Dashboard.css';
import { authLogout } from '../actions/actions';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    componentDidMount() {
        // TODO: fetch user data here
    }

    onLogoutClick() {
        // TODO: dispatch logout action
        this.props.authLogout();
    }

    render() {
        return (
            <div>
                <h1>Logged in to Admin Page</h1>
                <button type="button" onClick={this.onLogoutClick}>Logout</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authLogout: () => {
            dispatch(authLogout())
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Dashboard);
