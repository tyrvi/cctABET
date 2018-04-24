import {
    showModal,
    hideModal
} from './modalActions.js';

export const REQUEST_CREATE_USER = "REQUEST_CREATE_USER";
export function requestCreateUser(body) {
    return {
        type: REQUEST_CREATE_USER,
        body
    }
}

export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export function createUserSuccess(response) {
    return {
        type: CREATE_USER_SUCCESS,
        response,
    }
}

export const CREATE_USER_FAIL = "CREATE_USER_FAIL";
export function createUserFail(response) {
    return {
        type: CREATE_USER_FAIL,
        response,
    }
}

export const CREATE_USER_EMAIL_CHANGE = 'CREATE_USER_EMAIL_CHANGE';
export function createUserEmailChange(email) {
    return {
        type: CREATE_USER_EMAIL_CHANGE,
        email,
    }
}

export const CREATE_USER_PASS_CHANGE = 'CREATE_USER_PASS_CHANGE';
export function createUserPassChange(pass) {
    return {
        type: CREATE_USER_PASS_CHANGE,
        pass,
    }
}

export const CREATE_USER_FNAME_CHANGE = 'CREATE_USER_FNAME_CHANGE';
export function createUserFNameChange(f_name) {
    return {
        type: CREATE_USER_FNAME_CHANGE,
        f_name,
    }
}

export const CREATE_USER_LNAME_CHANGE = 'CREATE_USER_LNAME_CHANGE';
export function createUserLNameChange(l_name) {
    return {
        type: CREATE_USER_LNAME_CHANGE,
        l_name,
    }
}

export const CREATE_USER_PREFIX_CHANGE = 'CREATE_USER_PREFIX_CHANGE';
export function createUserPrefixChange(prefix) {
    return {
        type: CREATE_USER_PREFIX_CHANGE,
        prefix,
    }
}

export const CREATE_USER_TYPE_CHANGE = 'CREATE_USER_TYPE_CHANGE';
export function createUserTypeChange(type) {
    return {
        type: CREATE_USER_TYPE_CHANGE,
        user_type: type,
    }
}

export const CREATE_USER_CLEAR = 'CREATE_USER_CLEAR';
export function createUserClear() {
    return {
        type: CREATE_USER_CLEAR,
    }
}

export const REQUEST_UPDATE_USER = 'REQUEST_UPDATE_USER';
export function requestUpdateUser(query) {
    return {
        type: REQUEST_UPDATE_USER,
        query
    }
}


export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export function updateUserSuccess(response) {
    return {
        type: UPDATE_USER_SUCCESS,
        response,
    }
}

export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';
export function updateUserFail(response) {
    return {
        type: UPDATE_USER_FAIL,
        response,
    }
}


export const REQUEST_DELETE_USER = 'REQUEST_DELETE_USER';
export function requestDeleteUser(query) {
    return {
        type: REQUEST_DELETE_USER,
        query
    }
}

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export function deleteUserSuccess(response) {
    return {
        type: DELETE_USER_SUCCESS,
        response,
    }
}

export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';
export function deleteUserFail(response) {
    return {
        type: DELETE_USER_FAIL,
        response,
    }
}

export const REQUEST_USER_LIST = 'REQUEST_USER_LIST';
export function requestUserList(query) {
    return {
        type: REQUEST_USER_LIST,
        query
    }
}

export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export function userListSuccess(response) {
    return {
        type: USER_LIST_SUCCESS,
        response
    }
}

export const USER_LIST_FAIL = 'USER_LIST_FAIL';
export function userListFail(response) {
    return {
        type: USER_LIST_FAIL,
        response
    }
}

export const USER_LIST_FILTER_CHANGE = 'USER_LIST_FILTER_CHANGE';
export function userListFilterChange(email) {
    return {
        type: USER_LIST_FILTER_CHANGE,
        email,
    }
}

export const USER_LIST_SHOW_HIDE = 'USER_LIST_SHOW_HIDE';
export function userListShowHide() {
    return {
        type: USER_LIST_SHOW_HIDE,
    }
}

export function getUserList(email = null) {
    let query = '';
    if (email) {
        query = 'email=' + email;
    }

    return dispatch => {
        dispatch(requestUserList(query));
        return fetch('users?' + query, {
            method: 'GET',
            credentials: 'same-origin'
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(userListSuccess(json));
                } else {
                    dispatch(userListFail(json));
                }
            })
    };
}

/*
    Dispatches fetch request with a user, pass, email and type
    Params:
    Returns:
*/
export function createUser(userCreate) {
    let body = {
        email: userCreate.email,
        password: userCreate.pass,
        f_name: userCreate.f_name,
        l_name: userCreate.l_name,
        prefix: userCreate.prefix,
        type: userCreate.type,
    }

    return dispatch => {
        dispatch(requestCreateUser(body))
        return fetch('/users/create', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body),
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(createUserSuccess(json));
                    dispatch(createUserClear());
                } else {
                    dispatch(createUserFail(json));
                }
            });
    }
}

export function updateUser(user) {
    let body = user;

    return dispatch => {
        dispatch(requestUpdateUser(body));
        return fetch('users/update', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body),
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(updateUserSuccess(json));
                    dispatch(getUserList());
                } else {
                    dispatch(updateUserFail(json));
                }
            });
    }
}


export function deleteUser(user_id) {
    let query = 'user_id=' + user_id;

    return dispatch => {
        dispatch(requestDeleteUser(query));
        return fetch('users/delete?' + query, {
            method: 'GET',
            credentials: 'same-origin'
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(deleteUserSuccess(json));
                    dispatch(getUserList());
                } else {
                    dispatch(deleteUserFail(json));
                }
            });
    }
}
