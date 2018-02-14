import { combineReducers } from 'redux';
import loginReducer from './loginReducer.js';
import dashboardReducer from './dashboardReducer.js';

export default combineReducers({
    loginReducer,
    dashboardReducer,
})
