import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Dashboard.css';
import Accordion from './Accordion.js';
import Menu from './Menu.js';
import Admin from './Admin.js';
import { USER_TYPES } from '../actions/loginActions.js';


class Dashboard extends Component {

    render() {
        if (this.props.userType === USER_TYPES.ADMIN_USER) {
            return (
                <div id="Dashboard">
                    <Menu />
                    <Accordion />
                    <Admin />
                </div>
            );
        } else {
            return (
                <div class="mainContainer">
                    <nav class="mainNav">
                        <a href="#home">Home</a>
                        <a href="#help">Help</a>
                    </nav>
                <h1>Logged in to Admin Page</h1>
                <button type="button" onClick={this.onLogoutClick}>Logout</button>

                <footer>
                </footer>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        userType: state.login.userData.type,
    }
}

export default connect(
    mapStateToProps,
    null
)(Dashboard);
