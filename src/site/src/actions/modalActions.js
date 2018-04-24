export const SHOW_MODAL = 'SHOW_MODAL';
export function showModal(message, name, modalType) {
    return {
        type: SHOW_MODAL,
        name,
        message,
        modalType,
    }
}

export const HIDE_MODAL = 'HIDE_MODAL';
export function hideModal() {
    return {
        type: HIDE_MODAL,
    }
}




