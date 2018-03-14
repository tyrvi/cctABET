import {
    REQUEST_COURSE_LIST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL
} from '../actions/courseListActions.js';

function courseListReducer(state = {
    isDoingRequest: false,
    requestError: null,
    courseList: null,
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
        default:
            return state;
    }
}

export default courseListReducer;
