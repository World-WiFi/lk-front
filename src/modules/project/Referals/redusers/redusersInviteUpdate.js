export function inviteUpdateHasErrored(state = false, action) {
    switch (action.type) {
        case 'INVITE_UPDATE_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function inviteUpdate(state = [], action) {
    switch (action.type) {
        case 'INVITE_UPDATE_SUCCESS':
            return action.items;

        default:
            return state;
    }
}