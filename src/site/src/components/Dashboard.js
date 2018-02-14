import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import Accordion from './Accordion.js';
import Menu from './Menu.js';


class Dashboard extends Component {

    componentDidMount() {
        // TODO: fetch user data here
    }

    render() {
        return (
            <div id="Dashboard">
                <div>
                    <Menu />
                </div>
                <div>
                    <Accordion />
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(Dashboard);
