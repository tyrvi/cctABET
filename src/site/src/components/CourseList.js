import React, { Component } from 'react';
import { connect } from 'react-redux';
import Course from './Course.js';


class CourseList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseFilter: {
                semester: 'Fall',
                year: 2018
            },
            courseList: [
                {
                    course_id: 0,
                    course_name: 'blah',
                    semester: 'Fall',
                    year: 2018
                },
                {
                    course_id: 1,
                    course_name: 'asdlfjlka',
                    semester: 'Fall',
                    year: 2012
                },
                {
                    course_id: 2,
                    course_name: 'blah',
                    semester: 'Fall',
                    year: 2007
                },
            ]
        }
    }

    render() {
        const courses = this.state.courseList.map((course, idx) => {
            return (
                <Course key={idx}
                    course={course}
                />
            );
        });

        return (
            <div>
                <h3>Course List</h3>
                <div>
                    <h5>Course Filters</h5>
                    <select value={this.state.courseFilter.semester}
                        onChange={event => this.setState({courseFilter: Object.assign({}, this.state.courseFilter, {
                        semester: event.target.value
                    })})}>
                        <option value='Fall'>Fall</option>
                        <option value='Spring'>Spring</option>
                        <option value='Summer'>Summer</option>
                    </select>
                    <input type="number" value={this.state.courseFilter.year}
                        onChange={event => this.setState({courseFilter: Object.assign({}, this.state.courseFilter, {
                            year: event.target.value
                        })})}/>
                </div>
                <div>
                    <h5>Courses</h5>
                    {courses}
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(CourseList);
