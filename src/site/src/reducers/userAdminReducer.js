import {
    REQUEST_CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    CREATE_USER_EMAIL_CHANGE,
    CREATE_USER_FNAME_CHANGE,
    CREATE_USER_LNAME_CHANGE,
    CREATE_USER_PASS_CHANGE,
    CREATE_USER_PREFIX_CHANGE,
    CREATE_USER_TYPE_CHANGE,
    REQUEST_UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    REQUEST_DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    REQUEST_USER_LIST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_FILTER_CHANGE,
    USER_LIST_SHOW_HIDE,
    CREATE_USER_CLEAR
} from '../actions/userAdminActions.js';

function userListReducer(state ={
    isDoingRequest: false,
    requestMessage: null,
    requestError: null,
    userList: null,
    showHide: false,
    filter: {
        email: '',
    },
    userCreate: {
        email: '',
        pass: '',
        f_name: '',
        l_name: '',
        prefix: '',
        type: 1,
    }
}, action) {
    switch(action.type) {
        case CREATE_USER_CLEAR:
            return Object.assign({}, state, {
                userCreate: {
                    email: '',
                    pass: '',
                    f_name: '',
                    l_name: '',
                    prefix: '',
                    type: '',
                }
            })
        case CREATE_USER_EMAIL_CHANGE:
            return Object.assign({}, state, {
                userCreate: {
                    email: action.email,
                    pass: state.userCreate.pass,
                    f_name: state.userCreate.f_name,
                    l_name: state.userCreate.l_name,
                    prefix: state.userCreate.prefix,
                    type: state.userCreate.type,
                }
            })
        case CREATE_USER_PASS_CHANGE:
            return Object.assign({}, state, {
                userCreate: {
                    email: state.userCreate.email,
                    pass: action.pass,
                    f_name: state.userCreate.f_name,
                    l_name: state.userCreate.l_name,
                    prefix: state.userCreate.prefix,
                    type: state.userCreate.type,
                }
            })
        case CREATE_USER_FNAME_CHANGE:
            return Object.assign({}, state, {
                userCreate: {
                    email: state.userCreate.email,
                    pass: state.userCreate.pass,
                    f_name: action.f_name,
                    l_name: state.userCreate.l_name,
                    prefix: state.userCreate.prefix,
                    type: state.userCreate.type,
                }
            })
        case CREATE_USER_LNAME_CHANGE:
            return Object.assign({}, state, {
                userCreate: {
                    email: state.userCreate.email,
                    pass: state.userCreate.pass,
                    f_name: state.userCreate.f_name,
                    l_name: action.l_name,
                    prefix: state.userCreate.prefix,
                    type: state.userCreate.type,
                }
            })
        case CREATE_USER_PREFIX_CHANGE:
            return Object.assign({}, state, {
                userCreate: {
                    email: state.userCreate.email,
                    pass: state.userCreate.pass,
                    f_name: state.userCreate.f_name,
                    l_name: state.userCreate.l_name,
                    prefix: action.prefix,
                    type: state.userCreate.type,
                }
            })
        case CREATE_USER_TYPE_CHANGE:
            return Object.assign({}, state, {
                userCreate: {
                    email: state.userCreate.email,
                    pass: state.userCreate.pass,
                    f_name: state.userCreate.f_name,
                    l_name: state.userCreate.l_name,
                    prefix: state.userCreate.prefix,
                    type: action.user_type,
                }
            })
        case REQUEST_CREATE_USER:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case CREATE_USER_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: action.response.message,
                requestError: null,
            });
        case CREATE_USER_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: null,
                requestError: action.response.error,
            });
        case REQUEST_UPDATE_USER:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case UPDATE_USER_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: action.response.message,
                requestError: null,
            });
        case UPDATE_USER_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: null,
                requestError: action.response.error,
            });
        case REQUEST_DELETE_USER:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case DELETE_USER_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: action.response.message,
                requestError: null,
            });
        case DELETE_USER_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestMessage: null,
                requestError: action.response.error,
            });
        case REQUEST_USER_LIST:
            return Object.assign({}, state, {
                isDoingRequest: true,
                requestMessage: null,
                requestError: null,
            });
        case USER_LIST_SUCCESS:
            return Object.assign({}, state, {
                isDoingRequest: false,
                userList: action.response,
            });
        case USER_LIST_FAIL:
            return Object.assign({}, state, {
                isDoingRequest: false,
                requestError: action.response.error
            });
        case USER_LIST_FILTER_CHANGE:
            return Object.assign({}, state, {
                filter: {
                    email: action.email,
                }
            });
        case USER_LIST_SHOW_HIDE:
            return Object.assign({}, state, {
                showHide: !state.showHide,
            });
        default:
            return state;
    }
}

export default userListReducer;
