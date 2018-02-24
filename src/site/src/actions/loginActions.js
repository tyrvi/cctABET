export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export function requestLogin() {
    return {
        type: REQUEST_LOGIN,
    }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(response) {
    return {
        type: LOGIN_SUCCESS,
        response,
    }
}

export const LOGIN_FAIL = 'LOGIN_FAIL';
export function loginFail(response) {
    return {
        type: LOGIN_FAIL,
        response
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
    return {
        type: IS_LOGGED_IN,
        response,
    }
}

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export function requestLogout() {
    return {
        type: REQUEST_LOGOUT,
    }
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
    }
}

export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export function logoutFail() {
    return {
        type: LOGOUT_FAIL
    }
}


/*
    Dispatches fetch request to logout which deletes the cookie
    Params:
        None
    Returns:
        A function (thunk) that dispatchs requestLogout to the store
        and returns if the operation was successful
*/
export function authLogout() {
    return dispatch => {
        dispatch(requestLogout());
        return fetch('auth/logout', {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (json.logout) {
                    dispatch(logoutSuccess());
                } else {
                    dispatch(logoutFail());
                }
            })
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
export function authLogin(user, pass) {
    let query = 'user=' + user + '&pass=' + pass;

    return dispatch => {
        dispatch(requestLogin());
        return fetch('auth/login?' + query, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(loginSuccess(json));
                } else {
                    dispatch(loginFail(json));
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
export function authCheckLoggedIn() {
    return dispatch => {
        dispatch(checkingLoggedIn());
        return fetch('auth/is_logged_in', {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                dispatch(isLoggedIn(json));
            })
    };
}
