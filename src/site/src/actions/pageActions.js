const PAGES = {
    LOGIN: "LOGIN",
    DASHBOARD: "DASHBOARD",
    ADMIN: "ADMIN",
    FORM: "FORM"
}

export const GOTO_LOGIN = "GOTO_LOGIN";
export function gotoLogin() {
    return {
        type: GOTO_LOGIN,
    }
}

export const GOTO_DASHBOARD = "GOTO_DASHBOARD";
export function gotoDashboard() {
    return {
        type: GOTO_DASHBOARD,
    }
}

export const GOTO_ADMIN = "GOTO_ADMIN";
export function gotoAdmin() {
    return {
        type: GOTO_ADMIN,
    }
}

export const GOTO_FORM = "GOTO_FORM";
export function openForm(formID) {
    return {
        type: GOTO_FORM,
        formID,
    }
}
