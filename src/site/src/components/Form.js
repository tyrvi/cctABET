import React, { Component } from 'react';
import FormList from './FormList.js';
import FileList from './FileList.js';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assessmentCoor: 'Arisoa',
            email: 'Arisoa@bing.com',
            semester: 'Spring 2018',
            course: 'CS 4453 Artificial Intelligence',
        }
        this.updateCoordinator = this.updateCoordinator.bind(this);
        this.updateSemester = this.updateSemester.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
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
                <FormList list={this.props}/>
                <FileList form={this.props}/>

                {/*<button>SAVE</button>
                <input type='checkbox'/>completed*/}
            </div>
        )
    }
}

export default Form;

/*
    assessmentCoor: 'Arisoa',
    email: 'Arisoa@bing.com',
    semester: 'Spring 2018',
    course: 'CS 4453 Artificial Intelligence',
    performanceIndicator: 'Submits works effectively',
    outcomeLevel: 'Emphasized',
    assignments: 'Another question again????',
*/
