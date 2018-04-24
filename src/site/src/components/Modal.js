import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Modal.css';
import { hideModal } from '../actions/modalActions.js';

class Modal extends Component {

    onCancel() {

    }

    onConfirm() {

    }

    render() {
        return (
            <div className={this.props.visible ? "hidden" : "modalOverlay"}>
                <div className="modal">
                    <h2>{this.props.name}</h2>
                    <div className="content">
                        <div>{this.props.message}</div>
                        <div>
                            <button>Cancel</button>
                            <button>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        visible: state.modal.visible,
        name: state.modal.name,
        message: state.modal.message,
        modalType: state.modal.modalType,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cancel: () => {

        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
