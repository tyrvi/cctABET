import React, { Component } from 'react';

class FormList extends Component {

    constructor() {
        super();
        this.state = {
            numStudents: 0,
            students: [],
        };
        this.addNumStudent = this.addNumStudent.bind(this);
        this.updateStudentName = this.updateStudentName.bind(this);
        this.updateStudentPoints = this.updateStudentPoints.bind(this);
    }

    updateStudentAmount() {
        console.log(this.state.students.length);
        if(this.state.numStudents !== this.state.students.length) {
            this.setState({numStudents: this.state.students.length});
        }
    }

    addNumStudent(event) {
        this.setState({students: this.state.students.concat([{studentName: '', pointsEarned: ''}])});
        console.log(this.state);
    }
    removeStudent(student) {
        let tmp = this.state.students;
        tmp.splice(tmp.indexOf(student), 1);
        this.setState({tmp: tmp});
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

    render() {
        const studentList = this.state.students.map((student, idx) => {
            return (<div key={idx}>
                        <input type="text" value={student.studentName} onChange={this.updateStudentName.bind(this, student)} />
                        <input type="number" value={student.pointsEarned} onChange={this.updateStudentPoints.bind(this, student)}/>
                        <button type="button" onClick={this.removeStudent.bind(this, student)}>-</button>
                    </div>)
        });
        this.updateStudentAmount();
        return (
            <div>
                <input type="number" value={this.state.numStudents}/>
                <button type="button" onClick={this.addNumStudent}>+</button>
                <div>Name: Points:</div>
                {studentList}
            </div>
        )
    }
}
export default FormList;

/*
{studentName: '', pointsEarned: null},
{studentName: 'Thais', pointsEarned: 10},
{studentName: 'Conner', pointsEarned: 20},
{studentName: 'Andrew', pointsEarned: 9},
*/
  /*
  onChange={this.createStudentList.bind(this)
    createStudentList(event) {
        for(var i=0;i<parseInt(event.target.value, 10);i++)
        {
            this.addNumStudent();
        }
    }*/

    /*
    createStudentList(event) {
        for(var i=0;i<parseInt(event.target.value, 10);i++)
        {
            this.addNumStudent();
        }
    }*/