import React, { Component } from 'react';
import { connect } from 'react-redux';
import Course from './Course.js';
import './styles/CourseAdmin.css';
import {
    getCourseList,
    courseListFilterSemesterChange,
    courseListFilterYearChange,
    courseListShowHide
} from '../actions/courseAdminActions.js';


class CourseAdmin extends Component {
    constructor(props) {
        super(props);

        this.onCourseListClick = this.onCourseListClick.bind(this);
        this.onFilterClick = this.onFilterClick.bind(this);
    }

    componentDidMount() {
        this.props.getCourseList(this.props.filter.semester, this.props.filter.year);
    }

    onCourseListClick() {
        this.props.showHide();
    }

    onFilterClick() {
        this.props.getCourseList(this.props.filter.semester, this.props.filter.year);
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
                <h3>Courses</h3>
                <div>
                    <h5>Course Filters</h5>
                    <div>
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
                    <div className={this.props.isOpen ? "" : "hidden"}>
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
        filter: state.courses.filter,
        isOpen: state.courses.showHide
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCourseList: (semester = null, year = null) => {
            dispatch(getCourseList(semester, year));
        },
        updateFilterSemester: (semester) => {
            dispatch(courseListFilterSemesterChange(semester))
        },
        updateFilterYear: (year) => {
            dispatch(courseListFilterYearChange(year))
        },
        showHide: () => {
            dispatch(courseListShowHide())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseAdmin);
