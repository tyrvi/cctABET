export const REQUEST_AUTH = 'REQUEST_AUTH';
export function requestAuth() {
    return {
        type: REQUEST_AUTH,
    }
}

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export function authSuccess(response) {
    return {
        type: AUTH_SUCCESS,
    }
}

export const AUTH_FAIL = 'AUTH_FAIL';
export function authFail(response) {
    return {
        type: AUTH_FAIL,
    };
}

/*
    Dispatches fetch request with username and password
    Params:
        user: username
        pass: password
    Returns:
        A function (thunk) that dispatchs requestAuth to the store
        and fetches credentials.
*/
export function authenticate(user, pass) {
    let query = 'user=' + user + '&pass=' + pass;
    
    return dispatch => {
        dispatch(requestAuth());
        return fetch('/authenticate?' + query, {
            method: 'GET',
        }).then(res => res.json())
        .then(json => {
            if (json.valid) {
                dispatch(authSuccess(json));
            } else {
                dispatch(authFail(json));
            }
        })
    }
}