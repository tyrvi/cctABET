import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    }

    render() {
        const items = this.state.courseData.map(course => {
            return <AccordionItem key={course.courseID}
                    courseName={course.courseName}
                    forms={course.forms} />
        });

        return (
            <div id="Accordion">
                {items}
            </div>
        );
    }
}

export default connect(
    null,
    null
)(Accordion);
