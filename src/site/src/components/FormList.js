import React, { Component } from 'react';

class FormList extends Component {
    constructor() {
        super();
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

    render() {
        const studentList = this.state.students.map((student, idx) => {
            this.updateStudentAmount();
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
            </div>
        )
    }
}
export default FormList;
