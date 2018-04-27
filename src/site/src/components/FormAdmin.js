import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    updateFormItemCompleted,
    updateFormItemOutcome
} from '../actions/formAdminActions.js';

class FormAdmin extends Component {
    onOutcomeChange(idx, event) {
        console.log('idx: ', idx, 'event: ', event.target.value);
        this.props.updateOutcome(idx, event.target.value);
    }

    onCompletedChange(idx, event) {
        console.log('idx: ', idx, 'event: ', event.target.checked);

        let completed = event.target.checked ? 1 : 0;
        this.props.updateCompleted(idx, completed);
    }

    render() {
        let forms = this.props.forms.map((form, idx) => {
            return (
                <div key={idx}>
                    <b>Outcome:</b>
                    <input type="text" value={form.outcome}
                        onChange={this.onOutcomeChange.bind(this, idx)}/>
                    <b>Completed:</b>
                    <input type="checkbox" checked={form.completed ? true : false}
                        onChange={this.onCompletedChange.bind(this, idx)} />
                </div>
            );
        });

        return (
            <div>
                {forms}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        forms: state.formAdmin.forms,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCompleted: (idx, completed) => {
            dispatch(updateFormItemCompleted(idx, completed));
        },
        updateOutcome: (idx,outcome) => {
            dispatch(updateFormItemOutcome(idx, outcome));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormAdmin);
