import React, { Component } from 'react';
import FormList from './FormList.js';
import { connect } from 'react-redux';
import { getFormData } from '../actions/formActions.js'
import { updateFormData } from '../actions/formActions.js'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assessmentCoor: 'Arisoa',
            email: 'Arisoa@bing.com',
            semester: 'Spring 2018',
            course: 'CS 4453 Artificial Intelligence',
            performanceIndicator: 'Submits works effectively',
            outcomeLevel: 'Emphasized',
            assignments: 'Another question again????',
            completed: false,
        }
        this.updateCoordinator = this.updateCoordinator.bind(this);
        this.updateSemester = this.updateSemester.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePerformanceIndicator = this.updatePerformanceIndicator.bind(this);
        this.updateOutcomeLevel = this.updateOutcomeLevel.bind(this);
        this.updateAssignments = this.updateAssignments.bind(this);
        this.updateForms = this.updateForms.bind(this);
    }

    componentDidMount() {
        this.props.getFormData(this.props.formID);
    }

    updateCoordinator(event) {
        this.setState({assessmentCoor: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateSemester(event) {
        this.setState({semester: event.target.value});
    }

    updateCourse(event) {
        this.setState({course: event.target.value});
    }

    updatePointsPossible(event) {
        this.setState({pointsPossible: event.target.value});
    }

    updatePerformanceIndicator(event) {
        this.setState({performanceIndicator: event.target.value});
    }

    updateOutcomeLevel(event) {
        this.setState({outcomeLevel: event.target.value});
    }

    updateAssignments(event) {
        this.setState({assignments: event.target.value});
    }

    updateForms() {
        let form = {
            form_id: this.props.formID,
            course_id: this.props.courseID,
            outcome: this.props.outcome,
            completed: this.state.completed,
            data: this.state,
        }
        this.props.updateFormData(form);
    }

    render() {
        return (
            <div>
                <div>
                    <input type='text' value={this.state.assessmentCoor} onChange={this.updateCoordinator} />
                    Assessment Coodinator:
                </div>
                <div>
                    <input type='text' value={this.state.email} onChange={this.updateEmail}/>
                    Email:
                </div>
                <div>
                    <input type='text' value={this.state.semester} onChange={this.updateSemester}/>
                    Semester/Year:
                </div>
                <div>
                    <input type='text' value={this.state.course} onChange={this.updateCourse}/>
                    Course:
                </div>
                <div>
                    <input type='text' value={this.state.performanceIndicator} onChange={this.updatePerformanceIndicator}/>
                    Performance Indicator:
                </div>
                <div>
                    <input type='text' value={this.state.outcomeLevel} onChange={this.updateOutcomeLevel}/>
                    Expected Level of Outcome Mastery:
                </div>
                <div>
                    <input type='text' value={this.state.assignments} onChange={this.updateAssignments}/>
                    Assignments / Questions / Tasks
                </div>
                <FormList list={this.props}/>


                <button type="button" onClick={this.updateForms}>SAVE</button>
                <input type='checkbox'/>completed
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFormData: (formID) => {
            dispatch(getFormData(formID));
        },
        updateFormData: (json) => {
            dispatch(updateFormData(json));
        }
    }
}

const mapStateToProps = state => {
    return {
        formData: state.form.formData,
        courseID: state.page.courseID,
        formID: state.page.formID,
        outcome: state.page.outcome,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

/*
    assessmentCoor: 'Arisoa',
    email: 'Arisoa@bing.com',
    semester: 'Spring 2018',
    course: 'CS 4453 Artificial Intelligence',
    performanceIndicator: 'Submits works effectively',
    outcomeLevel: 'Emphasized',
    assignments: 'Another question again????',
*/
