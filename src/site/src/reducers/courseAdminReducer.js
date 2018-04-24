import {
    REQUEST_COURSE_LIST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,
    COURSE_LIST_FILTER_SEMESTER_CHANGE,
    COURSE_LIST_FILTER_YEAR_CHANGE,
    COURSE_LIST_SHOW_HIDE,
    CREATE_COURSE_COURSE_NAME_CHANGE,
    CREATE_COURSE_EMAIL_CHANGE,
    CREATE_COURSE_SEMESTER_CHANGE,
    CREATE_COURSE_YEAR_CHANGE,
    CREATE_COURSE_CLEAR,
    REQUEST_CREATE_COURSE,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAIL,
} from '../actions/courseAdminActions.js';

function courseAdminReducer(state = {
    isDoingRequest: false,
    requestMessage: null,
    requestError: null,
    courseList: null,
    showHide: false,
    filter: {
        semester: '',
        year: ''
    },
    courseCreate: {
        email: '',
        course_name: '',
        semester: '',
        year: '',
    },
}, action) {
    switch(action.type) {
        case REQUEST_COURSE_LIST:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case COURSE_LIST_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: action.response.message,
                courseList: action.response.courseData,
            });
        case COURSE_LIST_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: null,
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
        case CREATE_COURSE_COURSE_NAME_CHANGE:
            return Object.assign({}, state, {
                courseCreate: {
                    email: state.courseCreate.email,
                    course_name: action.course_name,
                    semester: state.courseCreate.semester,
                    year: state.courseCreate.year,
                }
            });
        case CREATE_COURSE_EMAIL_CHANGE:
            return Object.assign({}, state, {
                courseCreate: {
                    email: action.email,
                    course_name: state.courseCreate.course_name,
                    semester: state.courseCreate.semester,
                    year: state.courseCreate.year,
                }
            });
        case CREATE_COURSE_SEMESTER_CHANGE:
            return Object.assign({}, state, {
                courseCreate: {
                    email: state.courseCreate.email,
                    course_name: state.courseCreate.course_name,
                    semester: action.semester,
                    year: state.courseCreate.year,
                }
            });
        case CREATE_COURSE_YEAR_CHANGE:
            return Object.assign({}, state, {
                courseCreate: {
                    email: state.courseCreate.email,
                    course_name: state.courseCreate.course_name,
                    semester: state.courseCreate.semester,
                    year: action.year,
                }
            });
        case CREATE_COURSE_CLEAR:
            return Object.assign({}, state, {
                courseCreate: {
                    email: '',
                    course_name: '',
                    semester: '',
                    year: '',
                }
            });
        case REQUEST_CREATE_COURSE:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case CREATE_COURSE_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: action.response,
                requestError: null,
            });
        case CREATE_COURSE_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: null,
                requestError: action.response.error,
            })
        default:
            return state;
    }
}

export default courseAdminReducer;
