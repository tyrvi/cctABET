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

/*
    Dispatches fetch request with username and password
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
