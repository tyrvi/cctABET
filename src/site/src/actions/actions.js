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

export const CHECKING_LOGGED_IN = 'CHECKING_LOGGED_IN';
export function checkingLoggedIn() {
    return {
        type: CHECKING_LOGGED_IN,
    }
}

export const IS_LOGGED_IN = 'IS_LOGGED_IN';
export function isLoggedIn(response) {
    let loggedIn = response.logged_in;
    return {
        type: IS_LOGGED_IN,
        loggedIn,
    }
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
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (json.valid) {
                    dispatch(authSuccess(json));
                } else {
                    dispatch(authFail(json));
                }
            })
    };
}

/*
    Dispatches fetch request to check if user is already logged in
    Params:
        None
    Returns:
        A function (thunk) that dispatchs checkingLoggedIn to the store
        and checks if the user is logged in.
*/
export function checkLoggedIn() {
    return dispatch => {
        dispatch(checkingLoggedIn());
        return fetch('/is_logged_in', {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                //console.log(json);
                dispatch(isLoggedIn(json));
            })
    };
}
