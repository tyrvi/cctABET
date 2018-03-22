import {
    GOTO_LOGIN,
    GOTO_DASHBOARD,
    GOTO_ADMIN,
    GOTO_FORM,
    PAGES
} from '../actions/pageActions.js';

function pageReducer(state = {
    currentPage: "",
    formID: null
}, action) {
    switch(action.type) {
        case GOTO_LOGIN:
            return Object.assign({}, state, {
                currentPage: PAGES.LOGIN
            });
        case GOTO_DASHBOARD:
            return Object.assign({}, state, {
                currentPage: PAGES.DASHBOARD
            });
        case GOTO_ADMIN:
            return Object.assign({}, state, {
                currentPage: PAGES.ADMIN
            });
        case GOTO_FORM:
            return Object.assign({}, state, {
                currentPage: PAGES.FORM,
                formID: action.formID
            });
        default:
            return state;
    }
}

export default pageReducer;
