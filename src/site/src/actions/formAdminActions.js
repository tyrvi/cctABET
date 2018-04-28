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

export const DELETE_LIST_FORM = 'DELETE_LIST_FORM';
export function deleteListForm(form_id) {
    return {
        type: DELETE_LIST_FORM,
        form_id
    }
}

export const DELETE_FORM = 'DELETE_FORM';
export function deleteForm(idx) {
    return {
        type: DELETE_FORM,
        idx,
    }
}

export const UPDATE_NEW_FORM_OUTCOME = 'UPDATE_NEW_FORM_OUTCOME';
export function updateNewFormOutcome(outcome) {
    return {
        type: UPDATE_NEW_FORM_OUTCOME,
        outcome
    }
}

export const UPDATE_NEW_FORM_COMPLETED = 'UPDATE_NEW_FORM_COMPLETED';
export function updateNewFormCompleted(completed) {
    return {
        type: UPDATE_NEW_FORM_COMPLETED,
        completed
    }
}

export const ADD_FORM = 'ADD_FORM';
export function addForm(form) {
    return {
        type: ADD_FORM,
        form
    }
}

export const REQUEST_MASS_UPDATE_FORMS = 'REQUEST_MASS_UPDATE_FORMS';
export function requestMassUpdateForms(body) {
    return {
        type: REQUEST_MASS_UPDATE_FORMS,
        body
    }
}

export const MASS_UPDATE_FORMS_SUCCESS = 'MASS_UPDATE_FORMS_SUCCESS';
export function massUpdateFormsSuccess(response) {
    return {
        type: MASS_UPDATE_FORMS_SUCCESS,
        response,
    }
}

export const MASS_UPDATE_FORMS_FAIL = 'MASS_UPDATE_FORMS_FAIL';
export function massUpdateFormsFail(response) {
    return {
        type: MASS_UPDATE_FORMS_FAIL,
        response,
    }
}

export function massUpdateForms(forms) {
    let body = forms;

    return dispatch => {
        dispatch(requestMassUpdateForms(body));
        return fetch('/forms/massupdate', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(massUpdateFormsSuccess(json));
                } else {
                    dispatch(massUpdateFormsFail(json));
                }
            })
    }
}

export const CANCEL_UPDATE_FORMS = 'CANCEL_UPDATE_FORMS';
export function cancelUpdateForms() {
    return {
        type: CANCEL_UPDATE_FORMS,
    }
}

export const REQUEST_DELETE_FORM = 'REQUEST_DELETE_FORM';
export function requestDeleteForm(query) {
    return {
        type: REQUEST_DELETE_FORM,
        query
    }
}

export const DELETE_FORM_SUCCESS = 'DELETE_FORM_SUCCESS';
export function deleteFormSuccess(response) {
    return {
        type: DELETE_FORM_SUCCESS,
        response
    }
}

export const DELETE_FORM_FAIL = 'DELETE_FORM_FAIL';
export function deleteFormFail(response) {
    return {
        type: DELETE_FORM_FAIL,
        response,
    }
}

export function apiDeleteForm(form_id) {
    let query = 'form_id=' + form_id;

    return dispatch => {
        dispatch(requestDeleteForm(query));
        return fetch('/forms/delete?' + query, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(deleteFormSuccess(json));
                } else {
                    dispatch(deleteFormFail(json));
                }
            })
    }
}

// export function massDeleteForms(formIDList) {

// }
