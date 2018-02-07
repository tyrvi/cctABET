import React, { Component } from 'react';
import './Dashboard.css';
import { doLogout } from '../actions/actions';
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
        this.props.doLogout();
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
        doLogout: () => {
            dispatch(doLogout())
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Dashboard);
