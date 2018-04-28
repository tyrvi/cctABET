export const REQUEST_FORM_DATA = 'REQUEST_FORM_DATA';
export function requestFormData(query) {
    return {
        type: REQUEST_FORM_DATA,
        query
    }
}

export const FORM_DATA_SUCCESS = 'FORM_DATA_SUCCESS';
export function formDataSuccess(response) {
    return {
        type: FORM_DATA_SUCCESS,
        response
    }
}

export const FORM_DATA_FAIL = 'FORM_DATA_FAIL';
export function formDataFail(response) {
    return {
        type: FORM_DATA_FAIL,
        response
    }
}

export function getFormData(form_id) {
    let query = 'form_id=' + form_id;

    return dispatch => {
        dispatch(requestFormData(query));
        return fetch('forms?' + query, {
            method: 'GET',
            credentials: 'same-origin',
        }).then(res => res.json())
            .then(json => {
                if (!json.error) {
                    dispatch(formDataSuccess(json));
                } else {
                    dispatch(formDataFail(json));
                }
            })
    }
}

export const OUTCOME_MASTERY_CHANGE = 'OUTCOME_MASTERY_CHANGE';
export function outcomeMasteryChange(outcomeMastery) {
    return {
        type: OUTCOME_MASTERY_CHANGE,
        outcomeMastery
    }
}

export const QUESTIONS_CHANGE = 'QUESTION_CHANGE';
export function questionsChange(questions) {
    return {
        type: QUESTIONS_CHANGE,
        questions
    }
}

export const POINTS_POSSIBLE_CHANGE = 'POINTS_POSSIBLE_CHANGE';
export function pointsPossibleChange(points) {
    return {
        type: POINTS_POSSIBLE_CHANGE,
        points,
    }
}

export const STUDENT_NAME_CHANGE = 'STUDENT_NAME_CHANGE';
export function studentNameChange(studentName, idx) {
    return {
        type: STUDENT_NAME_CHANGE,
        studentName,
        idx,
    }
}

export const STUDENT_POINTS_CHANGE = 'STUDENT_POINTS_CHANGE';
export function studentPointsChange(points, idx) {
    return {
        type: STUDENT_NAME_CHANGE,
        points,
        idx,
    }
}

export const STUDENT_COMMENTS_CHANGE = 'STUDENT_COMMENTS_CHANGE';
export function studentCommentsChange(comments, idx) {
    return {
        type: STUDENT_NAME_CHANGE,
        comments,
        idx,
    }
}

export const ADD_STUDENT = 'ADD_STUDENT';
export function addStudent() {
    return {
        type: ADD_STUDENT,
    }
}

export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export function removeStudent() {
    return {
        type: REMOVE_STUDENT,
    }
}
