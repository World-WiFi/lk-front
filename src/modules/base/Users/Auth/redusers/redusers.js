export function userCredentialsHasErrored(state = false, action) {
    switch (action.type) {
        case 'USER_CREDENTIALS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function userCredentialsIsLoading(state = false, action) {
    switch (action.type) {
        case 'USER_CREDENTIALS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function userCredentials(state = null, action) {
    switch (action.type) {
        case 'USER_CREDENTIALS_FETCH_DATA_SUCCESS':
            return action.user;

        default:
            return state;
    }
}