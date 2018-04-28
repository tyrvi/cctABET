export const REQUEST_COURSE_LIST = 'REQUEST_COURSE_LIST';
export function requestCourseList(query) {
    return {
        type: REQUEST_COURSE_LIST,
        query
    }
}

export const COURSE_LIST_SUCCESS = 'COURSE_LIST_SUCCESS';
export function courseListSuccess(response) {
    return {
        type: COURSE_LIST_SUCCESS,
        response
    }
}

export const COURSE_LIST_FAIL = 'COURSE_LIST_FAIL';
export function courseListFail(response) {
    return {
        type: COURSE_LIST_FAIL,
        response
    }
}

export const COURSE_LIST_FILTER_EMAIL_CHANGE = 'COURSE_LIST_FILTER_EMAIL_CHANGE';
export function courseListFilterEmailChange(email) {
    return {
        type: COURSE_LIST_FILTER_EMAIL_CHANGE,
        email,
    }
}

export const COURSE_LIST_FILTER_SEMESTER_CHANGE = 'COURSE_LIST_FILTER_SEMESTER_CHANGE';
export function courseListFilterSemesterChange(semester) {
    return {
        type: COURSE_LIST_FILTER_SEMESTER_CHANGE,
        semester,
    }
}

export const COURSE_LIST_FILTER_YEAR_CHANGE = 'COURSE_LIST_FILTER_YEAR_CHANGE';
export function courseListFilterYearChange(year) {
    return {
        type: COURSE_LIST_FILTER_YEAR_CHANGE,
        year,
    }
}

export const COURSE_LIST_SHOW_HIDE = 'COURSE_LIST_SHOW_HIDE';
export function courseListShowHide() {
    return {
        type: COURSE_LIST_SHOW_HIDE,
    }
}


// ations for changing fields of course creation
export const CREATE_COURSE_EMAIL_CHANGE = 'CREATE_COURSE_EMAIL_CHANGE';
export function createCourseEmailChange(email) {
    return {
        type: CREATE_COURSE_EMAIL_CHANGE,
        email
    }
}

export const CREATE_COURSE_COURSE_NAME_CHANGE = 'CREATE_COURSE_COURSE_NAME_CHANGE';
export function createCourseNameChange(course_name) {
    return {
        type: CREATE_COURSE_COURSE_NAME_CHANGE,
        course_name,
    }
}

export const CREATE_COURSE_SEMESTER_CHANGE = 'CREATE_COURSE_SEMESTER_CHANGE';
export function createCourseSemesterChange(semester) {
    return {
        type: CREATE_COURSE_SEMESTER_CHANGE,
        semester,
    }
}

export const CREATE_COURSE_YEAR_CHANGE = 'CREATE_COURSE_YEAR_CHANGE';
export function createCourseYearChange(year) {
    return {
        type: CREATE_COURSE_YEAR_CHANGE,
        year,
    }
}

export const CREATE_COURSE_CLEAR = 'CREATE_COURSE_CLEAR';
export function createCourseClear() {
    return {
        type: CREATE_COURSE_CLEAR,
    }
}

export const REQUEST_CREATE_COURSE = 'REQUEST_CREATE_COURSE';
export function requestCreateCourse(body) {
    return {
        type: REQUEST_CREATE_COURSE,
        body,
    }
}

export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export function createCourseSuccess(response) {
    return {
        type: CREATE_COURSE_SUCCESS,
        response,
    }
}

export const CREATE_COURSE_FAIL = 'CREATE_COURSE_FAIL';
export function createCourseFail(response) {
    return {
        type: CREATE_COURSE_FAIL,
        response,
    }
}

export const REQUEST_UPDATE_COURSE = 'REQUEST_UPDATE_COURSE';
export function requestUpdateCourse(query) {
    return {
        type: REQUEST_UPDATE_COURSE,
        query,
    }
}

export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export function updateCourseSuccess(response) {
    return {
        type: UPDATE_COURSE_SUCCESS,
        response,
    }
}

export const UPDATE_COURSE_FAIL = 'UPDATE_COURSE_FAIL';
export function updateCourseFail(response) {
    return {
        type: UPDATE_COURSE_FAIL,
        response,
    }
}


export const REQUEST_DELETE_COURSE = 'REQUEST_DELETE_COURSE';
export function requestDeleteCourse(query) {
    return {
        type: REQUEST_DELETE_COURSE,
        query,
    }
}

export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';
export function deleteCourseSuccess(response) {
    return {
        type: DELETE_COURSE_SUCCESS,
        response,
    }
}

export const DELETE_COURSE_FAIL = 'DELETE_COURSE_FAIL';
export function deleteCourseFail(response) {
    return {
        type: DELETE_COURSE_FAIL,
        response,
    }
}


export function getCourseList(email = null, semester = null, year = null) {
    let e = email ? 'email=' + email : '';
    let s = semester ? 'semester=' + semester : '';
    let y = year ? 'year=' + year : '';
    let query = e + '&' + s + '&' + y;

    return dispatch => {
        dispatch(requestCourseList(query));
        return fetch('courses?' + query, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(courseListSuccess(json));
                } else {
                    dispatch(courseListFail(json));
                }
            });
    }
}

export function createCourse(courseCreate) {
    let body = {
        course_name: courseCreate.course_name,
        email: courseCreate.email,
        semester: courseCreate.semester,
        year: courseCreate.year,
    }

    return dispatch => {
        dispatch(requestCreateCourse(body));
        return fetch('/courses/create', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body),
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(createCourseSuccess(json));
                    dispatch(createCourseClear());
                } else {
                    dispatch(createCourseFail(json));
                }
            });
    }
}

export function updateCourse(course) {
    let body = course;
    console.log(body);
    return dispatch => {
        dispatch(requestUpdateCourse(body));
        return fetch('courses/update', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body),
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(updateCourseSuccess(json));
                } else {
                    dispatch(updateCourseFail(json));
                }
            })
    }
}

export function deleteCourse(course_id) {
    let query = 'course_id=' + course_id;

    return dispatch => {
        dispatch(requestDeleteCourse);
        return fetch('courses/delete?' + query, {
            method: 'GET',
            credentials: 'same-origin'
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(deleteCourseSuccess(json));
                } else {
                    dispatch(deleteCourseFail(json));
                }
            })
    }
}
