import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/AccordionItem.css';
import './styles/Accordion.css';
import { gotoForm } from '../actions/pageActions.js';

class AccordionItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }

        this.onCourseClick = this.onCourseClick.bind(this);
        this.onFormClick = this.onFormClick.bind(this);
    }

    onCourseClick() {
        this.setState({isOpen: !this.state.isOpen})
    }

    onFormClick(formID, course) {
        this.props.gotoForm(formID, course)
    }

    render() {
        const forms = this.props.forms.map(form => {
            return (
                <div className="form" key={form.form_id}
                    onClick={() => this.onFormClick(form.form_id, this.props.course)} >
                    {form.outcome}
                </div>
            );
        });

        return (
            <div>
                <button className="accordion" key={this.props.key} onClick={this.onCourseClick}>
                    {this.props.courseName}
                </button>
                <div className={this.state.isOpen ? "visible" : "hidden"}>
                    {forms}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        gotoForm: (formID, course) => {
            dispatch(gotoForm(formID, course));
        }
    }
}


export default connect(
    null,
    mapDispatchToProps
)(AccordionItem);
