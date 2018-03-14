import { combineReducers } from 'redux';
import loginReducer from './loginReducer.js';
import dashboardReducer from './dashboardReducer.js';
import adminReducer from './adminReducer.js';
import userListReducer from './userListReducer.js';

export default combineReducers({
    login: loginReducer,
    dashboard: dashboardReducer,
    admin: adminReducer,
    users: userListReducer,
})
