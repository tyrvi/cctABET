import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Modal.css';
import { hideModal } from '../actions/modalActions.js';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    onCancel() {
        this.props.onCancel();
        this.props.hide();
    }

    onConfirm() {
        this.props.onConfirm();
        this.props.hide();
    }

    render() {
        return (
            <div className={this.props.isOpen ? "modalOverlay" : "hidden"}>
                <div className="modal">
                    <h2>{this.props.name}</h2>
                    <div className="content">
                        <div>{this.props.message}</div>
                        <div>
                            <button onClick={this.onCancel}>Cancel</button>
                            <button onClick={this.onConfirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isOpen: state.modal.isOpen,
        name: state.modal.name,
        message: state.modal.message,
        onCancel: state.modal.onCancel,
        onConfirm: state.modal.onConfirm,
        payload: state.modal.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hide: () => {
            dispatch(hideModal());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
