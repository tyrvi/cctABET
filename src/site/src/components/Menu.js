import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Menu.css';
import { authLogout } from '../actions/loginActions.js';
import { USER_TYPES } from '../actions/loginActions.js';


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
                <h1>Hello, {this.props.fName} {this.props.lName}</h1>
                <button className="menuButton" type="button">Dashboard</button>
                {
                    USER_TYPES.ADMIN_USER === this.props.userType ?
                        <button className="menuButton" type="button">Admin</button> : null
                }
                <button className="menuButton" type="button" onClick={this.onLogoutClick}>Logout</button>
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
        fName: state.login.userData.f_name,
        lName: state.login.userData.l_name,
        userType: state.login.userData.type,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
