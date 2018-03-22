import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Dashboard.css';
import Accordion from './Accordion.js';

class Dashboard extends Component {

    render() {
        return (
            <div id="Dashboard">
                <Accordion />
            </div>
        )
    }
}

export default connect(
    null,
    null
)(Dashboard);
