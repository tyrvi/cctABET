import {
    REQUEST_FORM_DATA,
    FORM_DATA_FAIL,
    FORM_DATA_SUCCESS
} from '../actions/formActions.js';

function formReducer(state = {
    isDoingRequest: false,
    requestMessage: null,
    requestError: null,
    formData: {
        performanceIndicators: [],
        expectedOutcomeMaster: '',
        pointsPossible: 1,
        numberOfStudents: 1,
        studentlist: [
            {
                studentName: '',
                pointsObtained: 0,
                specialComments: ''
            }
        ],
    },
}, action) {
    switch(action.type) {
        case REQUEST_FORM_DATA:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case FORM_DATA_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: action.response.error,
                requestError: action.response,
            });
        case FORM_DATA_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                formData: action.response,
            });
        default:
            return state;
    }
}

export default formReducer;
