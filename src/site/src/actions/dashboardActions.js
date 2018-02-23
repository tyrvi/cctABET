export const REQUEST_COURSE_DATA = "REQUEST_COURSE_DATA";
export function requestCourseData() {
    return {
        type: REQUEST_COURSE_DATA,
    }
}

export const COURSE_DATA_SUCCESS = "COURSE_DATA_SUCCESS";
export function courseDataSuccess(response) {
    return {
        type: COURSE_DATA_SUCCESS,
        response,
    }
}

export const COURSE_DATA_FAIL = "COURSE_DATA_FAIL";
export function courseDataFail(response) {
    return {
        type: COURSE_DATA_FAIL,
        response,
    }
}

/*
    Dispatches fetch request with an email
    Params:
        email: the email of the user which is the foreign key for the courses
               table.
    Returns:
        A function (thunk) that dispatchs requestCourseData() then returns the
        course data information for that user.
*/
export function usersCourseData(email) {
    let query = 'email=' + email;

    return dispatch => {
        dispatch(requestCourseData());
        return fetch('users/course_data?' + query, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(courseDataSuccess(json));
                } else {
                    dispatch(courseDataFail(json));
                }
            })
    };
}
