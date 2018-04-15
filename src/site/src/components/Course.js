import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Course.css';

class Course extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course_name: this.props.course.course_name,
            semester: this.props.course.semester,
            year: this.props.course.year,
            editing: false,
        }

        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
    }

    onDelete() {
        // TODO: add confirmation of course deletion
        console.log("course being deleted");
    }

    onUpdate() {
        // TODO: add confirmation of course update
        console.log("course being updated");

        this.setState({editing: false});

        // TODO: add refetching of Course List
    }

    onEdit() {
        this.setState({editing: true});
    }

    onEditCancel() {
        this.setState({
            course_name: this.props.course.course_name,
            semester: this.props.course.semester,
            year: this.props.course.year,
            editing: false,
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <div className="courseBox">
                    <div className="courseItemBox"><b>Course Name:</b> {this.props.course.course_name}</div>
                    <div className="courseItemBox"><b>Semester:</b> {this.props.course.semester}</div>
                    <div className="courseItemBox"><b>Year:</b> {this.props.course.year}</div>
                    <button className="courseButton" onClick={this.onEdit}>Edit</button>
                    <button className="courseButton" onClick={this.onDelete}>Delete</button>
                </div>
            );
        } else {
            return (
                <div className="courseBox">
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

export default connect(
    null,
    null
)(Course);
