import {
    REQUEST_FORM_DATA,
    FORM_DATA_SUCCESS,
    FORM_DATA_FAIL,
} from '../actions/formActions.js';


function formReducer(state = {
    isDoingRequest: false,
    formData: null,
    requestError: null,
}, action) {
    switch(action.type) {
        case REQUEST_FORM_DATA:
            return Object.assign({}, state, {
                isDoingRequest: true,
            });
        case FORM_DATA_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                formData: action.response.formData,
            });
        case FORM_DATA_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestError: action.response.error,
            });
        default:
            return state;
    }
}


export default formReducer;
