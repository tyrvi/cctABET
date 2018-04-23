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

export const SAVE_FORM_DATA = 'SAVE_FORM_DATA';
export function saveFormData(response) {
    return {
        type: SAVE_FORM_DATA,
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
