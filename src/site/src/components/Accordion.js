import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersCourseData } from '../actions/dashboardActions.js';
import './Accordion.css';
import AccordionItem from './AccordionItem';


class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseData: [
                {
                    courseID: 0,
                    courseName: 'hello',
                    forms: [
                        {
                            formID: 2,
                            outcome: 'arisoa graphs'
                        },
                        {
                            formID: 3,
                            outcome: 'lasdfjlk'
                        },
                        {
                            formID: 4,
                            outcome: 'alwjkfsd'
                        }
                    ],
                },
                {
                    courseID: 1,
                    courseName: 'billy',
                    forms: [
                        {
                            formID: 5,
                            outcome: 'yeha budy'
                        },
                        {
                            formID: 6,
                            outcome: 'victor'
                        }
                    ],
                },
            ]
        }
    }

    componentDidMount() {
        // TODO: fetch course list
        this.props.usersCourseData('smith@lipscomb.edu');
    }

    render() {
        console.log(this.props.courseData);
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

const mapDispatchToProps = dispatch => {
    return {
        usersCourseData: (email) => {
            dispatch(usersCourseData(email))
        }
    };
}

const mapStateToProps = state => {
    return {
        courseData: state.dashboardReducer.courseData,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accordion);
