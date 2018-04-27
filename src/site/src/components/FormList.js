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
        };
        this.addNumStudent = this.addNumStudent.bind(this);
        this.updateStudentName = this.updateStudentName.bind(this);
        this.updateStudentPoints = this.updateStudentPoints.bind(this);
        this.updatePointsPossible = this.updatePointsPossible.bind(this);

        this.updateForms = this.updateForms.bind(this);
    }
    componentDidMount() {
        this.props.getFormData(this.props.formID);
        console.log("props",this.props)
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

    updatePointsPossible(event) {
        this.setState({pointsPossible: event.target.value});
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
            return (<div key={idx}>
                        <input type="text" value={student.studentName} onChange={this.updateStudentName.bind(this, student)} />
                        <input type="number" value={student.pointsEarned} onChange={this.updateStudentPoints.bind(this, student)}/>
                        <button type="button" onClick={this.removeStudent.bind(this, student)}>-</button>
                    </div>)
        });

        return (
            <div>
                <div>
                    <input type='number' value={this.state.pointsPossible} onChange={this.updatePointsPossible}/>
                    Points Possible:
                </div>
                <input type="number" value={this.state.numStudents}/>
                <button type="button" onClick={this.addNumStudent}>+</button>
                <div>Name: Points:</div>
                {studentList}



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
        formID: state.page.formID,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormList);
