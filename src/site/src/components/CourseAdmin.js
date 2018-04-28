import React, { Component } from 'react';
import { connect } from 'react-redux';
import Course from './Course.js';
import './styles/CourseAdmin.css';
import {
    getCourseList,
    courseListFilterEmailChange,
    courseListFilterSemesterChange,
    courseListFilterYearChange,
    courseListShowHide,
    createCourseClear,
    createCourseEmailChange,
    createCourseNameChange,
    createCourseSemesterChange,
    createCourseYearChange,
    createCourse,
} from '../actions/courseAdminActions.js';


class CourseAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }

        this.onCourseListClick = this.onCourseListClick.bind(this);
        this.onFilterClick = this.onFilterClick.bind(this);
        this.onCreateCourseClick = this.onCreateCourseClick.bind(this);
    }

    componentDidMount() {
        this.props.getCourseList(
            this.props.filter.email,
            this.props.filter.semester,
            this.props.filter.year
        );
    }

    onCourseListClick() {
        this.props.showHide();
    }

    onFilterClick() {
        this.props.getCourseList(
            this.props.filter.email,
            this.props.filter.semester,
            this.props.filter.year
        );
    }

    onCreateCourseClick() {
        // add actions for creating a course
        console.log('course being created');
        this.props.createCourse(this.props.courseCreate);
        this.props.getCourseList(
            this.props.filter.email,
            this.props.filter.semester,
            this.props.filter.year
        );
    }

    render() {
        let courses = null;
        if (this.props.courseList) {
            courses = this.props.courseList.map((course, idx) => {
                return (
                    <Course key={idx}
                        course={course}
                    />
                );
            });
        }

        return (
            <div>
                <button className="accordion"
                    onClick={event => this.setState({isOpen: !this.state.isOpen})}
                >
                    Courses & Forms
                </button>
                <div className={this.state.isOpen ? "" : "hidden"}>
                <div>
                    <div>
                        <h4>Create Course</h4>
                        <input type="text" value={this.props.courseCreate.email}
                            onChange={event => this.props.createCourseEmailChange(event.target.value)}
                            placeholder="email"/>
                        <input type="text" value={this.props.courseCreate.course_name}
                            onChange={event => this.props.createCourseNameChange(event.target.value)}
                            placeholder="course name"/>
                        <select value={this.props.courseCreate.semester}
                            onChange={event => this.props.createCourseSemesterChange(event.target.value)}>
                            <option value=''></option>
                            <option value='Fall'>Fall</option>
                            <option value='Spring'>Spring</option>
                            <option value='Summer'>Summer</option>
                        </select>
                        <input type="number" value={this.props.courseCreate.year}
                            onChange={event => this.props.createCourseYearChange(event.target.value)}
                            />
                        <button onClick={this.onCreateCourseClick}>create course</button>
                        <button onClick={this.props.createCourseClear}>clear</button>
                    </div>
                    <h5>Course Filters</h5>
                    <div>
                        Email:<input type="text" value={this.props.filter.email}
                            onChange={event => this.props.updateFilterEmail(event.target.value)}
                            />
                        Semester:<select value={this.props.filter.semester}
                            onChange={event => this.props.updateFilterSemester(event.target.value)}>
                            <option value=''></option>
                            <option value='Fall'>Fall</option>
                            <option value='Spring'>Spring</option>
                            <option value='Summer'>Summer</option>
                        </select>
                        Year:<input type="number" value={this.props.filter.year}
                            onChange={event => this.props.updateFilterYear(event.target.value)}/>
                        <button onClick={this.onFilterClick}>Filter</button>
                    </div>
                </div>
                <div>
                    <h5 onClick={this.onCourseListClick}>Course List</h5>
                    <button onClick={this.onCourseListClick}>{this.props.isOpen ? "hide" : "show"}</button>
                    <div className={this.props.isOpen ? "listBox" : "hidden"}>
                        {courses}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        courseList: state.courses.courseList,
        filter: state.courses.filter,
        isOpen: state.courses.showHide,
        courseCreate: state.courses.courseCreate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCourseList: (email = null, semester = null, year = null) => {
            dispatch(getCourseList(email, semester, year));
        },
        updateFilterEmail: (email) => {
            dispatch(courseListFilterEmailChange(email))
        },
        updateFilterSemester: (semester) => {
            dispatch(courseListFilterSemesterChange(semester))
        },
        updateFilterYear: (year) => {
            dispatch(courseListFilterYearChange(year))
        },
        showHide: () => {
            dispatch(courseListShowHide())
        },
        createCourse: (courseCreate) => {
            dispatch(createCourse(courseCreate));
        },
        createCourseClear: () => {
            dispatch(createCourseClear());
        },
        createCourseEmailChange: (email) => {
            dispatch(createCourseEmailChange(email));
        },
        createCourseNameChange: (course_name) => {
            dispatch(createCourseNameChange(course_name));
        },
        createCourseSemesterChange: (semester) => {
            dispatch(createCourseSemesterChange(semester));
        },
        createCourseYearChange: (year) => {
            dispatch(createCourseYearChange(year));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseAdmin);
