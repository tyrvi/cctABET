import React, { Component } from 'react';
import FormList from './FormList.js';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            assessmentCoor: 'Arisoa',
            semester: 'Spring 2018',
            course: 'CS 4453 Artificial Intelligence',
        }
        this.updateCoordinator = this.updateCoordinator.bind(this);
        this.updateSemester = this.updateSemester.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
    }

    updateCoordinator(event) {
        this.setState({assessmentCoor: event.target.value});
    }
    updateSemester(event) {
        this.setState({semester: event.target.value});
    }
    updateCourse(event) {
        this.setState({course: event.target.value});
    }



    render() {
        console.log(this.state);
        return ( 
            <div>
                <div>
                    <input type='text' value={this.state.assessmentCoor} onChange={this.updateCoordinator} />
                    Assessment Coodinator: 
                </div>
                <div>
                    <input type='text' value={this.state.semester} onChange={this.updateSemester}/>
                    Semester/Year:
                </div>
                <div>
                    <input type='text' value={this.state.course} onChange={this.updateCourse}/>
                    Course:
                </div>
                <FormList />
            </div>
        )
    }
}
export default Form;





















/*
    render() {
        return (
            <form>
                <h4>Students</h4>
                    <div className="amount">
                        <input type='text'>
                    </div>

                    <div className="students">
                        <input type="text" value={this.state.name}
                            onChange={event => this.setState({name: event.target.value})}
                            placeholder={`Student name`}/>

                        <input type="text" value={this.state.points}
                            placeholder={`Points`} />
                        <button type="button"  className="small">-</button>
                    </div>
                <button>Submit</button>
            </form>
        );
    }
}*/







/*




    handleAddingStudent(students) {
        this.setState({
            Students: this.state.Students.concat([{ name: '', points: ''}])
        });
    }

*/
