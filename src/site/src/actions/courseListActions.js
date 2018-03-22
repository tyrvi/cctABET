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

export function getCourseList(semester = null, year = null) {
    let query = '';
    if (semester && !year) {
        query = 'semester=' + semester;
    } else if (!semester && year) {
        query = 'year=' + year;
    } else if (semester && year) {
        query = 'semester=' + semester + '&year=' + year;
    }

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
