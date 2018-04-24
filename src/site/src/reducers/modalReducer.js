import {
    SHOW_MODAL,
    HIDE_MODAL,
} from '../actions/modalActions.js';

function modalReducer(state = {
    isOpen: false,
    name: '',
    message: '',
    onCancel: () => {},
    onConfirm: () => {},
    payload: null
}, action) {
    switch(action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, {
                isOpen: true,
                name: action.name,
                message: action.message,
                onCancel: action.onCancel,
                onConfirm: action.onConfirm,
                payload: action.payload
            });
        case HIDE_MODAL:
            return Object.assign({}, state, {
                isOpen: false,
                name: '',
                message: '',
                onCancel: () => {},
                onConfirm: () => {},
                payload: null,
            });
        default:
            return state;
    }
}

export default modalReducer;
