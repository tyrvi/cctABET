import {
    REQUEST_COURSE_LIST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,
    COURSE_LIST_FILTER_SEMESTER_CHANGE,
    COURSE_LIST_FILTER_YEAR_CHANGE,
    COURSE_LIST_SHOW_HIDE
} from '../actions/courseListActions.js';

function courseListReducer(state = {
    isDoingRequest: false,
    requestError: null,
    courseList: null,
    showHide: false,
    filter: {
        semester: '',
        year: ''
    },
}, action) {
    switch(action.type) {
        case REQUEST_COURSE_LIST:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestError: null,
            });
        case COURSE_LIST_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                courseList: action.response.courseData,
            });
        case COURSE_LIST_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestError: action.response.error,
            });
        case COURSE_LIST_FILTER_SEMESTER_CHANGE:
            return Object.assign({}, state, {
                filter: {
                    semester: action.semester,
                    year: state.filter.year
                }
            });
        case COURSE_LIST_FILTER_YEAR_CHANGE:
            return Object.assign({}, state, {
                filter: {
                    semester: state.filter.semester,
                    year: action.year
                }
            });
        case COURSE_LIST_SHOW_HIDE:
            return Object.assign({}, state, {
                showHide: !state.showHide,
            });
        default:
            return state;
    }
}

export default courseListReducer;
