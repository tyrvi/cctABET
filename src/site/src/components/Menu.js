import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Menu.css';
import { authLogout } from '../actions/loginActions.js';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    onLogoutClick() {
        this.props.authLogout();
    }

    render() {
        return (
            <div id="Menu">
                <h1>Hello, {this.props.username}</h1>
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

const mapStateToProps = state => {
    return {
        username: null,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
