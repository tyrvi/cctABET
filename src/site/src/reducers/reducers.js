import { combineReducers } from 'redux';
import pageReducer from './pageReducer.js';
import loginReducer from './loginReducer.js';
import dashboardReducer from './dashboardReducer.js';
import adminReducer from './adminReducer.js';
import userListReducer from './userAdminReducer.js';
import courseAdminReducer from './courseAdminReducer.js';
import formReducer from './formReducer.js';
import formAdminReducer from './formAdminReducer.js';

export default combineReducers({
    page: pageReducer,
    login: loginReducer,
    dashboard: dashboardReducer,
    admin: adminReducer,
    users: userListReducer,
    courses: courseAdminReducer,
    form: formReducer,
    formAdmin: formAdminReducer,
})
