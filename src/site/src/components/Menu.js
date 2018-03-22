import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Menu.css';
import { USER_TYPES } from '../actions/loginActions.js';
import { authLogout } from '../actions/loginActions.js';
import {
    gotoDashboard,
    gotoAdmin
} from '../actions/pageActions.js';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.onDashboardClick = this.onDashboardClick.bind(this);
        this.onAdminClick = this.onAdminClick.bind(this);
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    onDashboardClick() {
        this.props.gotoDashboard();
    }

    onAdminClick() {
        this.props.gotoAdmin();
    }

    onLogoutClick() {
        this.props.authLogout();
    }

    render() {
        return (
            <div id="Menu">
                <h1>Hello, {this.props.fName} {this.props.lName}</h1>
                <button className="menuButton" type="button"
                    onClick={this.onDashboardClick}>
                    Dashboard
                </button>
                {
                    USER_TYPES.ADMIN_USER === this.props.userType ?
                        <button className="menuButton" type="button"
                            onClick={this.onAdminClick}>
                            Admin
                        </button> : null
                }
                <button className="menuButton" type="button" onClick={this.onLogoutClick}>Logout</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authLogout: () => {
            dispatch(authLogout());
        },
        gotoDashboard: () => {
            dispatch(gotoDashboard());
        },
        gotoAdmin: () => {
            dispatch(gotoAdmin());
        }
    };
}

const mapStateToProps = state => {
    return {
        fName: state.login.userData.f_name,
        lName: state.login.userData.l_name,
        userType: state.login.userData.type,
        currentPage: state.page.currentPage,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
