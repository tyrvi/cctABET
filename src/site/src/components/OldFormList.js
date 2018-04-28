import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFormData, getFormData } from '../actions/formActions.js';


class FormList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numStudents: 0,
            pointsPossible: 0,
            students: [
                {studentName: '', pointsEarned: 0},
                {studentName: 'Thais', pointsEarned: 10},
                {studentName: 'Conner', pointsEarned: 20},
                {studentName: 'Andrew', pointsEarned: 9},
            ],
            performanceIndicator: "",
            outcomeLevel: "",
            assignments: "",
        };

        this.addNumStudent = this.addNumStudent.bind(this);
        this.updateStudentName = this.updateStudentName.bind(this);
        this.updateStudentPoints = this.updateStudentPoints.bind(this);
        this.updatePointsPossible = this.updatePointsPossible.bind(this);
        this.updatePerformanceIndicator = this.updatePerformanceIndicator.bind(this);
        this.updateOutcomeLevel = this.updateOutcomeLevel.bind(this);
        this.updateAssignments = this.updateAssignments.bind(this);
        this.updateForms = this.updateForms.bind(this);
        this.updateForms = this.updateForms.bind(this);
        this.updateComplete = this.updateComplete.bind(this);
    }

    componentDidMount() {
        this.props.getFormData(this.props.formID);
    }

    updateComplete(event) {
        if (event.target.checked) {
            this.props.formData.completed = 1;
        } else {
            this.props.formData.completed = 0;
        }

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

    updateStudentAmount() {
        if(this.state.numStudents !== this.state.students.length) {
            this.setState({numStudents: this.state.students.length});
        }
    }

    addNumStudent(event) {
        this.setState({students: this.state.students.concat([{studentName: '', pointsEarned: ''}])});
    }

    removeStudent(student) {
        let tmp = this.state.students;
        tmp.splice(tmp.indexOf(student), 1);
        this.setState({tmp:tmp});
    }

    updateStudentName(student, event) {
        let tmp = this.state.students;
        tmp[tmp.indexOf(student)].studentName = event.target.value;
        this.setState({tmp:tmp});
    }

    updateStudentPoints(student, event) {
        let tmp = this.state.students;
        tmp[tmp.indexOf(student)].pointsEarned = event.target.value;
        this.setState({tmp:tmp});
    }

    updateForms() {
        let form = {
            form_id: this.props.formData.form_id,
            course_id: this.props.formData.course_id,
            outcome: this.props.formData.outcome,
            completed: this.props.formData.completed,
            data: this.state,
        }

        this.props.updateFormData(form);
    }

    render() {
        const studentList = this.state.students.map((student, idx) => {
            return (
                <div key={idx}>
                    <input type="text" value={student.studentName} onChange={this.updateStudentName.bind(this, student)} />
                    <input type="number" value={student.pointsEarned} onChange={this.updateStudentPoints.bind(this, student)}/>
                    <button type="button" onClick={this.removeStudent.bind(this, student)}>-</button>
                </div>
            );
        });

        return (
            <div>
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
                <div>
                    <input type='number' value={this.state.pointsPossible} onChange={this.updatePointsPossible}/>
                    Points Possible:
                </div>

                <input type="number" value={this.state.numStudents}/>
                <button type="button" onClick={this.addNumStudent}>+</button>
                <div>Name: Points:</div>

                {studentList}

                <button type="button" onClick={this.updateForms}>SAVE</button>
                <input type='checkbox' onChange={this.updateComplete}/>completed
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
        formID: state.page.formID,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormList);
