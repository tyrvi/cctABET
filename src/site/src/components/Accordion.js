import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Accordion.css';


class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        // TODO: fetch course list
    }

    render() {
        return (
            <div id="Accordion">
                This is the accordion
            </div>
        );
    }
}

export default connect(
    null,
    null
)(Accordion);
