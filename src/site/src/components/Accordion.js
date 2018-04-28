import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersCourseData } from '../actions/dashboardActions.js';
import './styles/Accordion.css';
import AccordionItem from './AccordionItem';

class Accordion extends Component {

    componentDidMount() {
        this.props.usersCourseData(this.props.userId);
    }

    render() {
        let items = null;
        if (this.props.courseData) {
            items = this.props.courseData.map(course => {
                return <AccordionItem key={course.course_id}
                        course_id={course.course_id}
                        courseName={course.course_name}
                        forms={course.forms}
                        />
            });
        }

        return (
            <div id="Accordion">
            <h1>Dashboard</h1>
                {items}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        courseData: state.dashboard.courseData,
        userId: state.login.userData.user_id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        usersCourseData: (user_id) => {
            dispatch(usersCourseData(user_id))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accordion);
