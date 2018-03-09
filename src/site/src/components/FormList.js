import React, { Component } from 'react';

class FormList extends Component {

    constructor() {
        super();
        this.state = {
            numStudents: 0,
            students: [
                {studentName: '', pointsEarned: null},
                {studentName: 'Thais', pointsEarned: 10},
                {studentName: 'Conner', pointsEarned: -20},
                {studentName: 'Andrew', pointsEarned: 69},
            ],
        };
    }

    addNumStudents(event) {
        this.setState({students: this.state.students.concat({studentName: '', pointsEarned: null})});
    }

    render() {
        const studentList = this.state.students.map( student => {
            return (<div key={student.studentName}>
                        <input type="text" defaultValue={student.studentName}/>
                        <input type="text" defaultValue={student.pointsEarned}/>
                    </div>)
        });

        return (
            <div>
                {studentList}
                <button type="button" onClick={this.addNumStudents}>+</button>
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
