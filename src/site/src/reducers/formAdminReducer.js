import {
    REQUEST_FORMS,
    FORMS_REQUEST_FAIL,
    FORMS_REQUEST_SUCCESS,
    UPDATE_FORM_ITEM_COMPLETED,
    UPDATE_FORM_ITEM_OUTCOME,
    ADD_FORM,
    UPDATE_NEW_FORM_COMPLETED,
    UPDATE_NEW_FORM_OUTCOME,
    REQUEST_MASS_UPDATE_FORMS,
    MASS_UPDATE_FORMS_SUCCESS,
    MASS_UPDATE_FORMS_FAIL,
    CANCEL_UPDATE_FORMS,
    DELETE_FORM,
    DELETE_LIST_FORM
} from '../actions/formAdminActions.js';

// Not currently used in this reducer
// function insertItem(array, idx, item) {
//     return [
//         ...array.slice(0, idx),
//         item,
//         ...array.slice(idx)
//     ];
// }

function appendItem(array, item)  {
    return [
        ...array.slice(0, array.length),
        item
    ];
}

function removeItem(array, idx) {
    return [
        ...array.slice(0, idx),
        ...array.slice(idx + 1)
    ];
}

function updateCompleted(array, idx, completed) {
    return array.map((item, index) => {
        if (idx !== index) {
            return item;
        }

        return {
            ...item,
            completed
        }
    });
}

function updateOutcome(array, idx, outcome) {
    return array.map((item, index) => {
        if (idx !== index) {
            return item;
        }

        return {
            ...item,
            outcome
        }
    });
}

function formAdminReducer(state = {
    isDoingRequest: false,
    requestMessage: null,
    requestError: null,
    forms: [],
    formsToDelete: [],
    newForm: {
        form_id: null,
        course_id: null,
        outcome: '',
        completed: 0,
        data: {}
    }
}, action) {
    switch(action.type) {
        case REQUEST_FORMS:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case FORMS_REQUEST_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: null,
                requestError: action.response.error,
            });
        case FORMS_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: null,
                requestError: null,
                forms: action.response,
            });
        case UPDATE_FORM_ITEM_COMPLETED:
            return Object.assign({}, state, {
                forms: updateCompleted(
                    state.forms,
                    action.idx,
                    action.completed
                ),
            });
        case UPDATE_FORM_ITEM_OUTCOME:
            return Object.assign({}, state, {
                forms: updateOutcome(
                    state.forms,
                    action.idx,
                    action.outcome
                ),
            });
        case DELETE_LIST_FORM:
            return Object.assign({}, state, {
                formsToDelete: appendItem(state.formsToDelete, action.form_id),
            });
        case DELETE_FORM:
            return Object.assign({}, state, {
                forms: removeItem(state.forms, action.idx),
            });
        case ADD_FORM:
            return Object.assign({}, state, {
                forms: appendItem(state.forms, action.form),
                newForm: {
                    form_id: null,
                    course_id: null,
                    outcome: '',
                    completed: 0,
                    data: {}
                }
            });
        case UPDATE_NEW_FORM_COMPLETED:
            return Object.assign({}, state, {
                newForm: {
                    form_id: null,
                    course_id: null,
                    outcome: state.newForm.outcome,
                    completed: action.completed,
                    data: {}
                }
            });
        case UPDATE_NEW_FORM_OUTCOME:
            return Object.assign({}, state, {
                newForm: {
                    form_id: null,
                    course_id: null,
                    outcome: action.outcome,
                    completed: state.newForm.completed,
                    data: {}
                }
            });
        case REQUEST_MASS_UPDATE_FORMS:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case MASS_UPDATE_FORMS_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: action.response,
                requestError: null,
                forms: [],
                formsToDelete: [],
                newForm: {
                    form_id: null,
                    course_id: null,
                    outcome: '',
                    completed: 0,
                    data: {}
                }
            });
        case MASS_UPDATE_FORMS_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: null,
                requestError: action.response.error,
            });
        case CANCEL_UPDATE_FORMS:
            return Object.assign({}, state, {
                forms: [],
                formsToDelete: [],
                newForm: {
                    form_id: null,
                    course_id: null,
                    outcome: '',
                    completed: 0,
                    data: {}
                }
            });
        default:
            return state;
    }
}

export default formAdminReducer;
