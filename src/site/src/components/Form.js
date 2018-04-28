import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getFormData,
    outcomeMasteryChange,
    questionsChange,
    pointsPossibleChange,
    addStudent,
    removeStudent
} from '../actions/formActions.js';

class Form extends Component {

    componentDidMount() {
        this.props.getFormData(this.props.formID);
    }

    render() {
        let students = null;
        if (this.props.formData.data.studentList) {
            let students = this.props.formData.studentList.map((student, idx) => {
                return (
                    <tr key={idx}>
                        <td>
                            <input type='text'
                                value={student.studentName}
                            />
                        </td>
                        <td>
                            <input type='number'
                                value={student.pointsObtained}
                            />
                        </td>
                        <td>
                            {(student.pointsObtained / this.props.formData.pointsPossible) * 100} %
                        </td>
                        <td>
                            <textarea rows="2" cols="30"
                                value={student.specialComments}
                            />
                        </td>
                    </tr>
                );
            });
        }

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
                    <input type='text' value={this.props.formData.outcomeMastery}
                        onChange={event => this.props.outcomeMasteryChange(event.target.value)}
                    />
                </div>
                <div>
                    <b>Assignments/Questions/Tasks: </b>
                    <textarea rows="5" cols="50"
                        value={this.props.formData.questions}
                        onChange={event => this.props.questionsChange(event.target.value)}
                    />
                </div>
                <div>
                    <b>Total number of Points Possible: </b>
                    <input type="number"
                        value={this.props.formData.pointsPossible}
                        onChange={event => this.props.pointsPossibleChange(event.target.value)}
                    />
                </div>
                <div>
                    <b>Number of Students Assessed: </b>
                    {/*<input type="number"
                        value={this.props.formData.studentList.length}
        />*/}
                    <div>{this.props.formData.length}</div>
                    <button type="button"
                        onClick={this.props.addStudent}
                    >
                    +
                    </button>
                    <button type="button"
                        onClick={this.props.removeStudent}
                    >
                    -
                    </button>
                </div>
                <div>
                    <table style={{width: 100 + '%'}}>
                        <tbody>
                            <tr>
                                <th>Student Name</th>
                                <th>Points Obtained</th>
                                <th>Points Percent</th>
                                <th>Special Comments</th>
                            </tr>
                            {students}
                        </tbody>
                    </table>
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
    questions: string
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
        },
        outcomeMasteryChange: (outcomeMastery) => {
            dispatch(outcomeMasteryChange(outcomeMastery));
        },
        questionsChange: (questions) => {
            dispatch(questionsChange(questions));
        },
        pointsPossibleChange: (points) => {
            dispatch(pointsPossibleChange(points));
        },
        addStudent: () => {
            dispatch(addStudent());
        },
        removeStudent: () => {
            dispatch(removeStudent());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
