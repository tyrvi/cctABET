import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    updateFormItemCompleted,
    updateFormItemOutcome,
    updateNewFormCompleted,
    updateNewFormOutcome,
    addForm
} from '../actions/formAdminActions.js';

class FormAdmin extends Component {
    constructor(props) {
        super(props);

        this.onAddForm = this.onAddForm.bind(this);
    }

    onOutcomeChange(idx, event) {
        console.log('idx: ', idx, 'event: ', event.target.value);
        this.props.updateOutcome(idx, event.target.value);
    }

    onCompletedChange(idx, event) {
        console.log('idx: ', idx, 'event: ', event.target.checked);

        let completed = event.target.checked ? 1 : 0;
        this.props.updateCompleted(idx, completed);
    }

    onAddForm() {
        console.log('adding form to list', this.props.newForm);

        let form = {
            form_id: null,
            course_id: this.props.course_id,
            outcome: this.props.newForm.outcome,
            completed: this.props.newForm.completed,
            data: {},
        }
        this.props.addForm(form);
    }

    render() {
        let forms = this.props.forms.map((form, idx) => {
            return (
                <div key={idx}>
                    <b>Outcome:</b>
                    <input type="text" value={form.outcome}
                        onChange={this.onOutcomeChange.bind(this, idx)}
                    />
                    <b>Completed:</b>
                    <input type="checkbox" checked={form.completed ? true : false}
                        onChange={this.onCompletedChange.bind(this, idx)}
                    />
                    <button>Delete</button>
                </div>
            );
        });

        return (
            <div>
                {forms}
                <div>
                    <b>Outcome:</b>
                    <input type="text" value={this.props.newForm.outcome}
                        onChange={event => this.props.updateNewOutcome(event.target.value)} />
                    <b>Completed:</b>
                    <input type="checkbox" checked={this.props.newForm.completed ? true : false}
                        onChange={event => this.props.updateNewCompleted(
                            this.props.newForm.completed ? 0 : 1
                        )} />
                    <button onClick={this.onAddForm}>Add form</button>
                 </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        forms: state.formAdmin.forms,
        newForm: state.formAdmin.newForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCompleted: (idx, completed) => {
            dispatch(updateFormItemCompleted(idx, completed));
        },
        updateOutcome: (idx,outcome) => {
            dispatch(updateFormItemOutcome(idx, outcome));
        },
        updateNewCompleted: (completed) => {
            console.log('blah', completed);
            dispatch(updateNewFormCompleted(completed));
        },
        updateNewOutcome: (outcome) => {
            dispatch(updateNewFormOutcome(outcome));
        },
        addForm: (form) => {
            dispatch(addForm(form));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormAdmin);
