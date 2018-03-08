export const REQUEST_CREATE_DB = "REQUEST_CREATE_DB";
export function requestCreateDB() {
    return {
        type: REQUEST_CREATE_DB,
    }
}

export const CREATE_DB_SUCCESS = "CREATE_DB_SUCCESS";
export function createDBSuccess(response) {
    return {
        type: CREATE_DB_SUCCESS,
        response,
    }
}

export const CREATE_DB_FAIL = "CREATE_DB_FAIL";
export function createDBFail(response) {
    return {
        type: CREATE_DB_FAIL,
        response,
    }
}

export const REQUEST_INSERT_TEST_DATA = "REQUEST_INSERT_TEST_DATA";
export function requestInsertTestData() {
    return {
        type: REQUEST_INSERT_TEST_DATA,
    }
}

export const INSERT_TEST_DATA_SUCCESS = "INSERT_TEST_DATA_SUCCESS";
export function insertTestDataSuccess(response) {
    return {
        type: INSERT_TEST_DATA_SUCCESS,
        response,
    }
}

export const INSERT_TEST_DATA_FAIL = "INSERT_TEST_DATA_FAIL";
export function insertTestDataFail(response) {
    return {
        type: INSERT_TEST_DATA_FAIL,
        response,
    }
}

export const REQUEST_CREATE_USER = "REQUEST_CREATE_USER";
export function requestCreateUser() {
    return {
        type: REQUEST_CREATE_USER,
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

export const REQUEST_UPDATE_USER = 'REQUEST_UPDATE_USER';
export function requestUpdateUser() {
    return {
        type: REQUEST_UPDATE_USER,
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
export function requestDeleteUser() {
    return {
        type: REQUEST_DELETE_USER,
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

/*
    Dispatches fetch request with a user, pass, email and type
    Params:
        user: the username of the new user
        pass: the password of the new user
        email: the email of the new user
        type: the user type of the new user
    Returns:
        A function (thunk) that dispatchs requestCreateUser() then
        inserts the new user into the database.
*/
// TODO: change to a POST request
export function adminCreateUser(user, pass, email, type) {
    let query = 'user=' + user + '&pass=' + pass +
        '&email=' + email + '&type=' + type;

    return dispatch => {
        dispatch(requestCreateUser());
        return fetch('users/create?' + query, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(createUserSuccess(json));
                } else {
                    dispatch(createUserFail(json));
                }
            })
    };
}

/*
    Dispatches fetch request with a db name
    Params:
        db: the database name. This must match the remote database name
            to be successful.
    Returns:
        A function (thunk) that dispatchs requestCreateDB() then drops
        the current database and creates a new one.
*/
export function adminCreateDB(db) {
    let query = 'db=' + db;

    return dispatch => {
        dispatch(requestCreateDB());
        return fetch('admin/create_db?' + query, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(createDBSuccess(json));
                } else {
                    dispatch(createDBFail(json));
                }
            })
    };
}


/*
    Dispatches fetch request with username and password
    Params:
        db: the database name. This must match the remote database name
            to be successful.
    Returns:
        A function (thunk) that dispatchs requestCreateDB() which fills the
        database with test data.
*/
export function insertTestData(db) {
    let query = 'db=' + db;

    return dispatch => {
        dispatch(requestInsertTestData());
        return fetch('admin/insert_test_data?'+ query, {
            methd: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(insertTestDataSuccess(json));
                } else {
                    dispatch(insertTestDataFail(json));
                }
            })
    }
}


export function adminUpdateUser(username, email, type) {
    let body = {
        username,
        email,
        type,
    } // 'username=' + username +'&email=' + email + '&type' + type;

    return dispatch => {
        dispatch(requestUpdateUser());
        return fetch('users/update', {
            method: 'POST',
            credentials: 'same-origin',
            body: body,
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(updateUserSuccess(json));
                } else {
                    dispatch(updateUserFail(json));
                }
            });
    }
}


export function adminDeleteUser(email) {
    let query = 'email=' + email;

    return dispatch => {
        dispatch(requestDeleteUser());
        return fetch('users/delete?' + query, {
            method: 'GET',
            credentials: 'same-origin'
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(deleteUserSuccess(json));
                } else {
                    dispatch(deleteUserFail(json));
                }
            });
    }
}
