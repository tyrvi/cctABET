import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/AccordionItem.css';
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

    onFormClick(formID, courseID, outcome) {
        this.props.gotoForm(formID, courseID, outcome)
    }

    render() {
        const forms = this.props.forms.map(form => {
            console.log("form", form.outcome)
            return (
                <button className="formButton" key={form.form_id}
                    onClick={() => this.onFormClick(form.form_id, this.props.course_id, form.outcome)} >
                    {form.outcome}
                </button>
            );
        });

        return (
            <div className="courseButtonContainer" key={this.props.key}>
                <button className="courseButton" onClick={this.onCourseClick}>{this.props.courseName}</button>
                <div className={this.state.isOpen ? "" : "hidden"}>
                    {forms}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        gotoForm: (formID) => {
            dispatch(gotoForm(formID));
        }
    }
}


export default connect(
    null,
    mapDispatchToProps
)(AccordionItem);
