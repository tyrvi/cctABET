import {
    SHOW_MODAL,
    HIDE_MODAL,
} from '../actions/modalActions.js';

function modalReducer(state = {
    visible: false,
    name: '',
    message: '',
    modalType: null,
}, action) {
    switch(action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, {
                visible: true,
                name: action.name,
                message: action.message,
                modalType: action.modalType,
            });
        case HIDE_MODAL:
            return Object.assign({}, state, {
                visible: false,
                name: '',
                message: '',
                modalType: null,
            });
        default:
            return state;
    }
}

export default modalReducer;
