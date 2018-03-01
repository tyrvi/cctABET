import React, { Component } from 'react';

class FormList extends Component {

    constructor() {
        super();
        this.state = {
            numStudents: 0,
            students: [
                {studentName: '', pointsEarned: null},
                {studentName: 'Thais', pointsEarned: 10},
                {studentName: 'Conner', pointsEarned: 20},
                {studentName: 'Andrew', pointsEarned: 9},
            ],
        };
    }

    onNumStudentsChange(event) {

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
                <input type='text' defaultValue={this.state.numStudents}
                onChange={this.onNumStudentsChange} />

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
