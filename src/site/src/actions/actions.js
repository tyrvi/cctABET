//import { store } from '../index.js';

export const LOGGING_IN = 'LOGGING_IN';
export function loggingIn(sending) {
    return {
        type: LOGGING_IN,
        sending,
    }
}

export const LOG_IN = 'LOG_IN';
export function login(user, pass) {
    return (dispatch)
    if (!user || !pass) {
        store.dispatch(loggingIn(false))
    }

    return {};
}

export const LOG_OUT = 'LOG_OUT';
export function logout() {
    return {
        type: LOG_OUT,
    };
}

export const LOGGING_OUT = 'LOGGING_OUT';
export function logginOut(sending) {
    return {
        type: LOGGING_OUT,
        sending,
    };
}