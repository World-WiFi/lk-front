export function userCredentialsHasErrored(bool) {
    return {
        type:       'USER_CREDENTIALS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function userCredentialsIsLoading(bool) {
    return {
        type:      'USER_CREDENTIALS_IS_LOADING',
        isLoading: bool
    };
}

export function userCredentialsFetchDataSuccess(user) {
    return {
        type: 'USER_CREDENTIALS_FETCH_DATA_SUCCESS',
        user
    };
}

export function userCredentialsFetchData(url) {
    return dispatch => {
        dispatch(userCredentialsIsLoading(true));

        console.log(sessionStorage.getItem('jwt'));

        fetch(new Request(url + '/users/profile/user-info?expand=profile,icon,avatar', {
            method:  'GET',
            headers: new Headers({'Authorization': sessionStorage.getItem('jwt')}),
        }))
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(userCredentialsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((result) => {
                console.log('User api result', result);
                dispatch(userCredentialsFetchDataSuccess(result))
            })
            .catch(() => dispatch(userCredentialsHasErrored(true)));
    }
}