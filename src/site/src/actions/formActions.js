export const REQUEST_FORM_DATA = 'REQUEST_FORM_DATA';
export function requestFormData(query) {
    return {
        type: REQUEST_FORM_DATA,
        query,
    }
}

export const FORM_DATA_SUCCESS = 'FORM_DATA_SUCCESS';
export function formDataSuccess(response) {
    return {
        type: FORM_DATA_SUCCESS,
        response,
    }
}

export const FORM_DATA_FAIL = 'FORM_DATA_FAIL';
export function formDataFail(response) {
    return {
        type: FORM_DATA_FAIL,
        response,
    }
}

export const REQUEST_FORM_UPDATE = 'UPDATE_FORM_DATA';
export function requestFormUpdate(response) {
    return {
        type: REQUEST_FORM_UPDATE,
        response,
    }
}


export function getFormData(form_id) {
    let query = 'form_id=' + form_id;

    return dispatch => {
        dispatch(requestFormData(query));
        return fetch('forms?' + query, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(formDataSuccess(json));
                } else {
                    dispatch(formDataFail(json));
                }
            })
    };
}

export function updateFormData(form) {
    let body = form;

    return dispatch => {
        dispatch(requestFormUpdate(body));
        return fetch('forms/update', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(body),
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(formDataSuccess(json));
                } else {
                    dispatch(formDataFail(json));
                }
            })
    }
}
