import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersCourseData } from '../actions/dashboardActions.js';
import './styles/Accordion.css';
import AccordionItem from './AccordionItem';


class Accordion extends Component {

    componentDidMount() {
        this.props.usersCourseData(this.props.email);
    }

    render() {
        let items = null;
        if (this.props.courseData) {
            items = this.props.courseData.map(course => {
                return <AccordionItem key={course.course_id}
                        courseName={course.course_name}
                        forms={course.forms} />
            });
        }

        return (
            <div id="Accordion">
                {items}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        courseData: state.dashboard.courseData,
        email: state.login.userData.email,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        usersCourseData: (email) => {
            dispatch(usersCourseData(email))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accordion);
