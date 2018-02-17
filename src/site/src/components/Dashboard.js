import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import Accordion from './Accordion.js';
import Menu from './Menu.js';
import Admin from './Admin.js';


class Dashboard extends Component {

    componentDidMount() {
        // TODO: fetch user data here
    }

    render() {
        return (
            <div id="Dashboard">
                <Menu />
                <Accordion />
                <Admin />
            </div>
        );
    }
}

export default connect(
    null,
    null
)(Dashboard);
