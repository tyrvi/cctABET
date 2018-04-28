import {
    REQUEST_FORM_DATA,
    FORM_DATA_FAIL,
    FORM_DATA_SUCCESS,
    OUTCOME_MASTERY_CHANGE,
    QUESTIONS_CHANGE,
    POINTS_POSSIBLE_CHANGE,
    STUDENT_NAME_CHANGE,
    STUDENT_POINTS_CHANGE,
    STUDENT_COMMENTS_CHANGE,
    ADD_STUDENT,
    REMOVE_STUDENT
} from '../actions/formActions.js';

// Not currently used in this reducer
// function insertItem(array, idx, item) {
//     return [
//         ...array.slice(0, idx),
//         item,
//         ...array.slice(idx)
//     ];
// }

function appendItem(array, item)  {
    return [
        ...array.slice(0, array.length),
        item
    ];
}

function popItem(array) {
    return [
        ...array.slice(0, array.length-1),
    ]
}

function removeItem(array, idx) {
    return [
        ...array.slice(0, idx),
        ...array.slice(idx + 1)
    ];
}

function updateCompleted(array, idx, completed) {
    return array.map((item, index) => {
        if (idx !== index) {
            return item;
        }

        return {
            ...item,
            completed
        }
    });
}

export const DEFAULT_STUDENT = {
    studentName: '',
    pointsObtained: 0,
    specialComments: '',
}

export const DEFAULT_FORM_DATA = {
    performanceIndicators: [],
    expectedOutcomeMastery: '',
    questions: '',
    pointsPossible: 1,
    numberOfStudents: 1,
    studentList: [
        {
            studentName: '',
            pointsObtained: 0,
            specialComments: ''
        }
    ],
}

function formReducer(state = {
    isDoingRequest: false,
    requestMessage: null,
    requestError: null,
    formData: {
        performanceIndicators: [],
        expectedOutcomeMastery: '',
        questions: '',
        pointsPossible: 1,
        numberOfStudents: 1,
        studentList: [
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
            let formData;
            if (Object.keys(action.response.data).length === 0 &&
                action.response.data.constructor === Object) {
                formData = Object.assign({}, action.response, {
                    data: DEFAULT_FORM_DATA,
                });
            } else {
                formData = action.response.data;
            }

            return Object.assign({}, state, {
                isDoingRequest: false,
                formData
            });
        case OUTCOME_MASTERY_CHANGE:
            return Object.assign({}, state, {
                formData: {
                    performanceIndicators: state.formData.performanceIndicators,
                    // update outcome master
                    expectedOutcomeMastery: action.outcomeMastery,
                    questions: state.formData.questions,
                    pointsPossible: state.formData.pointsPossible,
                    numberOfStudents: state.formData.numberOfStudents,
                    studentList: state.formData.studentlist
                }
            });
        case QUESTIONS_CHANGE:
            return Object.assign({}, state, {
                formData: {
                    performanceIndicators: state.formData.performanceIndicators,
                    expectedOutcomeMastery: state.formData.outcomeMastery,
                    // update questions text area
                    questions: action.questions,
                    pointsPossible: state.formData.pointsPossible,
                    numberOfStudents: state.formData.numberOfStudents,
                    studentList: state.formData.studentlist
                }
            });
        case POINTS_POSSIBLE_CHANGE:
            return Object.assign({}, state, {
                formData: {
                    performanceIndicators: state.formData.performanceIndicators,
                    expectedOutcomeMastery: state.formData.outcomeMastery,
                    questions: state.formData.questions,
                    // update points possible field
                    pointsPossible: action.points,
                    numberOfStudents: state.formData.numberOfStudents,
                    studentList: state.formData.studentlist
                }
            });
        case ADD_STUDENT:
            return Object.assign({}, state, {
                formData: {
                    performanceIndicators: state.formData.performanceIndicators,
                    expectedOutcomeMastery: state.formData.outcomeMastery,
                    questions: state.formData.questions,
                    pointsPossible: state.formData.pointsPossible,
                    numberOfStudents: state.formData.numberOfStudents,
                    studentList: appendItem(state.formData.studentList, DEFAULT_STUDENT),
                }
            });
        case REMOVE_STUDENT:
            return Object.assign({}, state, {
                formData: {
                    performanceIndicators: state.formData.performanceIndicators,
                    expectedOutcomeMastery: state.formData.outcomeMastery,
                    questions: state.formData.questions,
                    pointsPossible: state.formData.pointsPossible,
                    numberOfStudents: state.formData.numberOfStudents,
                    studentList: popItem(state.formData.studentList),
                }
            });
        case STUDENT_NAME_CHANGE:
            return state;
        case STUDENT_POINTS_CHANGE:
            return state;
        case STUDENT_COMMENTS_CHANGE:
            return state;
        default:
            return state;
    }
}

export default formReducer;
