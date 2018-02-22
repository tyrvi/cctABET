import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AccordionItem.css';

class AccordionItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }

        this.onCourseClick = this.onCourseClick.bind(this);
    }

    onCourseClick() {
        this.setState({isOpen: !this.state.isOpen})
    }


    render() {
        const forms = this.props.forms.map(form => {
            return (
                <div key={form.formID}>{form.outcome}</div>
            );
        });

        return (
            <div key={this.props.key}>
                <button onClick={this.onCourseClick}>{this.props.courseName}</button>
                <div className={this.state.isOpen ? "" : "hidden"}>
                    {forms}
                </div>
            </div>
        );
    }
}


export default connect(
    null,
    null
)(AccordionItem);
