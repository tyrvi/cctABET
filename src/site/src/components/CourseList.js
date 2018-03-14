import React, { Component } from 'react';
import { connect } from 'react-redux';
import Course from './Course.js';
import './styles/CourseList.css';
import { getCourseList } from '../actions/courseListActions.js';


class CourseList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            courseFilter: {
                semester: '',
                year: ''
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

        this.onCourseListClick = this.onCourseListClick.bind(this);
        this.onFilterClick = this.onFilterClick.bind(this);
    }

    componentDidMount() {
        // TODO: fetch course list data
        this.props.getCourseList(this.state.courseFilter.semester, this.state.courseFilter.year);
    }

    onCourseListClick() {
        this.setState({isOpen: !this.state.isOpen});
    }

    onFilterClick() {
        // TODO: fetch filtered courselist
        this.props.getCourseList(this.state.courseFilter.semester, this.state.courseFilter.year);
    }

    render() {
        let courses = null;
        if (this.props.courseList) {
            courses = this.state.courseList.map((course, idx) => {
                return (
                    <Course key={idx}
                        course={course}
                    />
                );
            });
        }

        return (
            <div>
                <h3>Courses</h3>
                <div>
                    <h5>Course Filters</h5>
                    <div>
                        Semester:<select value={this.state.courseFilter.semester}
                            onChange={event => this.setState({courseFilter: Object.assign({}, this.state.courseFilter, {
                            semester: event.target.value
                        })})}>
                            <option value=''></option>
                            <option value='Fall'>Fall</option>
                            <option value='Spring'>Spring</option>
                            <option value='Summer'>Summer</option>
                        </select>
                        Year:<input type="number" value={this.state.courseFilter.year}
                            onChange={event => this.setState({courseFilter: Object.assign({}, this.state.courseFilter, {
                                year: event.target.value
                            })})}/>
                        <button onClick={this.onFilterClick}>Filter</button>
                    </div>
                </div>
                <div>
                    <h5 onClick={this.onCourseListClick}>Course List</h5>
                    <button onClick={this.onCourseListClick}>{this.state.isOpen ? "hide" : "show"}</button>
                    <div className={this.state.isOpen ? "" : "hidden"}>
                        {courses}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        courseList: state.courses.courseList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCourseList: (semester = null, year = null) => {
            dispatch(getCourseList(semester, year));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseList);
