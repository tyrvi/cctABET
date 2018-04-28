import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormData } from '../actions/formActions.js';

class Form extends Component {

    componentDidMount() {
        this.props.getFormData(this.props.formID);
    }

    render() {
        return (
            <div>
                <h4>Assessment of Student Outcome: {this.props.formData.outcome}</h4>
                <div>
                    <b>Assessment Coordinator: </b>
                    {this.props.user.f_name + ' ' + this.props.user.l_name}
                </div>
                <div>
                    <b>Email: </b>{this.props.course.email}
                </div>
                <div>
                    <b>Course: </b>{this.props.course.course_name}
                </div>
                <div>
                    <b>Semester and Year: </b>
                    {this.props.course.semester + ' ' + this.props.course.year}
                </div>
                <div></div>
                <div>
                    <b>Performance Indicators: </b>
                    Some list of stuff here
                </div>
                <div>
                    <b>Expected Level of Outcome Mastery: </b>
                    <input type='text' />
                </div>
                <div>
                    <b>Assignments/Questions/Tasks: </b>
                    <textarea rows="5" cols="50" />
                </div>
                <div>
                    <b>Total number of Points Possible: </b>
                    <input type="number" />
                </div>
                <div>
                    <b>Number of Students Assessed: </b>
                    <input type="number" />
                    <button type="button">+</button>
                </div>
                <div>
                    Table of students
                </div>
            </div>
        );
    }
}

/*
stuff in form formData
{
    performanceIndicators: [
        string
    ]
    expectedOutcomeMaster: string
    pointsPossible: int
    numberOfStudents: int
    studentlist: [
        {
            studentName: string,
            pointsObtained: int,
            Points Percent: float, // CALCULATE THIS TO DISPLAY BASED ON pointsObtained
            special comments: string // text area field
        }
    ]
}
*/

const mapStateToProps = state => {
    return {
        formID: state.page.formID,
        formData: state.form.formData,
        user: state.login.userData,
        course: state.page.course,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFormData: (form_id) => {
            dispatch(getFormData(form_id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
