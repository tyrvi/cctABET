import { combineReducers } from 'redux';
import loginReducer from './loginReducer.js';
import dashboardReducer from './dashboardReducer.js';
import adminReducer from './adminReducer.js';

export default combineReducers({
    loginReducer,
    dashboardReducer,
    adminReducer,
})
