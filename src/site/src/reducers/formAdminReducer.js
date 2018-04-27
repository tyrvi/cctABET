import {
    REQUEST_FORMS,
    FORMS_REQUEST_FAIL,
    FORMS_REQUEST_SUCCESS,
    UPDATE_FORM_ITEM_COMPLETED,
    UPDATE_FORM_ITEM_OUTCOME
} from '../actions/formAdminActions.js';

function insertItem(array, idx, item) {
    return [
        ...array.slice(0, idx),
        item,
        ...array.slice(idx)
    ];
}

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
        default:
            return state;
    }
}

export default formAdminReducer;
