import {
    REQUEST_COURSE_DATA,
    COURSE_DATA_SUCCESS,
    COURSE_DATA_FAIL,
} from '../actions/dashboardActions.js';

function dashboardReducer(state = {
    isDoingRequest: false,
    courseData: null,
    requestError: null,
}, action) {
    switch(action.type) {
        case REQUEST_COURSE_DATA:
            return Object.assign({}, state, {
                isDoingRequest: true,
            });
        case COURSE_DATA_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                courseData: action.response.courseData,
            });
        case COURSE_DATA_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestError: action.response.error,
            });
        default:
            return state;
    }
}

export default dashboardReducer;
