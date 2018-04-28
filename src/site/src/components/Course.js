import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Course.css';
import {
    deleteCourse,
    updateCourse,
    getCourseList,
} from '../actions/courseAdminActions.js';
import {
    getFormsByCourseID,
    cancelUpdateForms,
    massUpdateForms,
    apiDeleteForm
} from '../actions/formAdminActions.js';
import FormAdmin from './FormAdmin.js';

import ReactModal from 'react-modal';

ReactModal.setAppElement('body');

class Course extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course_name: this.props.course.course_name,
            email: this.props.course.email,
            semester: this.props.course.semester,
            year: this.props.course.year,
            editing: false,
            editForms: false,
        }

        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
        this.onEditForms = this.onEditForms.bind(this);
        this.cancelEditForms = this.cancelEditForms.bind(this);
        this.submitEditForms = this.submitEditForms.bind(this);
    }

    onDelete() {
        // TODO: add confirmation of course deletion
        console.log("course being deleted");

        this.props.deleteCourse(this.props.course.course_id);
        this.props.getCourseList(
            this.props.filter.email,
            this.props.filter.semester,
            this.props.filter.year
        );
    }

    onUpdate() {
        // TODO: add confirmation of course update
        console.log("course being updated");

        let course = {
            course_id: this.props.course.course_id,
            course_name: this.state.course_name,
            email: this.state.email,
            semester: this.state.semester,
            year: this.state.year,
        };

        this.props.updateCourse(course);
        this.props.getCourseList(
            this.props.filter.email,
            this.props.filter.semester,
            this.props.filter.year
        );

        this.setState({editing: false});
    }

    onEdit() {
        this.setState({editing: true});
    }

    onEditCancel() {
        this.setState({
            course_name: this.props.course.course_name,
            email: this.props.course.email,
            semester: this.props.course.semester,
            year: this.props.course.year,
            editing: false,
        });
    }

    onEditForms() {
        this.props.getForms(this.props.course.course_id);
        this.setState({editForms: true});
    }

    cancelEditForms() {
        console.log('canceling form metadata');
        this.props.cancelForms();

        this.setState({editForms: false})
    }

    submitEditForms() {
        console.log('submitting forms metadata');
        this.props.deleteMarkedForms(this.props.markedForms);
        this.props.submitForms(this.props.forms);
        this.setState({editForms: false})
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="courseBox">
                    <div className="courseItemBox"><b>Email:</b> {this.props.course.email}</div>
                    <div className="courseItemBox"><b>Course Name:</b> {this.props.course.course_name}</div>
                    <div className="courseItemBox"><b>Semester:</b> {this.props.course.semester}</div>
                    <div className="courseItemBox"><b>Year:</b> {this.props.course.year}</div>
                    <button className="courseButton" onClick={this.onEdit}>Edit</button>
                    <button className="courseButton" onClick={this.onDelete}>Delete</button>
                    <button className="courseButton" onClick={this.onEditForms}>Edit Forms</button>
                    <ReactModal
                        isOpen={this.state.editForms}
                        contentLabel="Form Editor"
                    >
                        <div>
                            <FormAdmin course_id={this.props.course.course_id}/>
                        </div>
                        <button onClick={this.cancelEditForms}>Cancel</button>
                        <button onClick={this.submitEditForms}>Submit</button>
                    </ReactModal>
                </div>
            );
        } else {
            return (
                <div className="courseBox">
                    <div className="courseItemBox">
                        <b>Email:</b>
                        <input type="text" value={this.state.email}
                            onChange={event => this.setState({email: event.target.value})}
                        />
                    </div>
                    <div className="courseItemBox">
                        <b>Course Name:</b>
                        <input type="text" value={this.state.course_name}
                            onChange={event => this.setState({course_name: event.target.value})}
                        />
                    </div>
                    <div className="courseItemBox">
                        <b>Semester:</b>
                        <select value={this.state.semester}
                            onChange={event => this.setState({semester: event.target.value})}>
                            <option value='Fall'>Fall</option>
                            <option value='Spring'>Spring</option>
                            <option value='Summer'>Summer</option>
                        </select>
                    </div>
                    <div className="courseItemBox">
                        <b>Year:</b>
                        <input type="number" value={this.state.year}
                            onChange={event => this.setState({year: event.target.value})}
                        />
                    </div>
                    <button className="courseButton" onClick={this.onUpdate}>Update</button>
                    <button className="courseButton" onClick={this.onEditCancel}>Cancel</button>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        filter: state.courses.filter,
        forms: state.formAdmin.forms,
        markedForms: state.formAdmin.formsToDelete
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCourseList: (email = null, semester = null, year = null) => {
            dispatch(getCourseList(email, semester, year));
        },
        updateCourse: (course) => {
            dispatch(updateCourse(course));
        },
        deleteCourse: (course) => {
            dispatch(deleteCourse(course));
        },
        getForms: (course_id) => {
            dispatch(getFormsByCourseID(course_id));
        },
        deleteMarkedForms: (formIDList) => {
            formIDList.map((form_id) => {
                dispatch(apiDeleteForm(form_id))

                return form_id;
            });
        },
        submitForms: (forms) => {
            dispatch(massUpdateForms(forms));
        },
        cancelForms: () => {
            dispatch(cancelUpdateForms());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Course);
