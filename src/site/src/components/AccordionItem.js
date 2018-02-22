import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccordionItem extends Component {

    render() {
        return (
            <div>I am an item</div>
        );
    }
}


export default connect(
    null,
    null
)(AccordionItem);
