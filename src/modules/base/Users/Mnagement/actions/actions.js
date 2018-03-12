export function itemsHasErrored(bool) {
    return {
        type:       'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type:      'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData() {
    return dispatch => {
        dispatch(itemsIsLoading(true));

        fetch(new Request('http://api.wifitarget.com/users/manages', {
            method:  'GET',
            headers: new Headers({'Authorization': sessionStorage.getItem('jwt')}),
        }))
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                console.log('User api', items);
                dispatch(itemsFetchDataSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    }
}