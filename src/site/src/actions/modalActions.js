export const SHOW_MODAL = 'SHOW_MODAL';
export function showModal(name, message, onCancel, onConfirm, payload = {
    onCancel: null,
    onConfirm: null,
}) {
    return {
        type: SHOW_MODAL,
        name,
        message,
        onCancel,
        onConfirm,
        payload,
    }
}

export const HIDE_MODAL = 'HIDE_MODAL';
export function hideModal() {
    return {
        type: HIDE_MODAL,
    }
}




