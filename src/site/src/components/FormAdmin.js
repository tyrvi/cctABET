import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    updateFormItemCompleted,
    updateFormItemOutcome,
    updateNewFormCompleted,
    updateNewFormOutcome,
    addForm,
    deleteForm,
    deleteListForm
} from '../actions/formAdminActions.js';

class FormAdmin extends Component {
    constructor(props) {
        super(props);

        this.onAddForm = this.onAddForm.bind(this);
    }

    onOutcomeChange(idx, event) {
        this.props.updateOutcome(idx, event.target.value);
    }

    onCompletedChange(idx, event) {
        let completed = event.target.checked ? 1 : 0;
        this.props.updateCompleted(idx, completed);
    }

    deleteForm(idx, form_id, event) {
        if (form_id !== null) {
            this.props.deleteListForm(form_id);
            this.props.deleteForm(idx);
        } else {
            this.props.deleteForm(idx);
        }

    }

    onAddForm() {
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
                    <button onClick={this.deleteForm.bind(this, idx, form.form_id)}>Delete</button>
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
        updateOutcome: (idx, outcome) => {
            dispatch(updateFormItemOutcome(idx, outcome));
        },
        updateNewCompleted: (completed) => {
            dispatch(updateNewFormCompleted(completed));
        },
        updateNewOutcome: (outcome) => {
            dispatch(updateNewFormOutcome(outcome));
        },
        addForm: (form_id) => {
            dispatch(addForm(form_id));
        },
        deleteForm: (idx) => {
            dispatch(deleteForm(idx));
        },
        deleteListForm: (form) => {
            dispatch(deleteListForm(form));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormAdmin);
