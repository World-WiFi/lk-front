export function referralsHasErrored(state = false, action) {
    switch (action.type) {
        case 'REFERRALS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function referralsIsLoading(state = false, action) {
    switch (action.type) {
        case 'REFERRALS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function referrals(state = [], action) {
    switch (action.type) {
        case 'REFERRALS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}