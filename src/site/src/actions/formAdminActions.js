export const REQUEST_FORMS = 'REQUEST_FORMS';
export function requestForms(query) {
    return {
        type: REQUEST_FORMS,
        query,
    }
}

export const FORMS_REQUEST_SUCCESS = 'FORMS_REQUEST_SUCCESS';
export function formsRequestSuccess(response) {
    return {
        type: FORMS_REQUEST_SUCCESS,
        response,
    }
}

export const FORMS_REQUEST_FAIL = 'FORMS_REQUEST_FAIL';
export function formsRequestFail(response) {
    return {
        type: FORMS_REQUEST_FAIL,
        response,
    }
}

export function getFormsByCourseID(course_id = null) {
    let query = 'course_id=' + course_id;

    return dispatch => {
        dispatch(requestForms(query));
        return fetch('forms?' + query, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(formsRequestSuccess(json));
                } else {
                    dispatch(formsRequestFail(json));
                }
            });
    }
}


export const UPDATE_FORM_ITEM_OUTCOME = 'UPDATE_FORM_ITEM_OUTCOME';
export function updateFormItemOutcome(idx, outcome) {
    return {
        type: UPDATE_FORM_ITEM_OUTCOME,
        outcome,
        idx
    }
}

export const UPDATE_FORM_ITEM_COMPLETED = 'UPDATE_FORM_ITEM_COMPLETED';
export function updateFormItemCompleted(idx, completed) {
    return {
        type: UPDATE_FORM_ITEM_COMPLETED,
        completed,
        idx
    }
}
