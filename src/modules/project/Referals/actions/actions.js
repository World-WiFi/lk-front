import axios from "axios/index";

export function referralsHasErrored(bool) {
    return {
        type:       'REFERRALS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function referralsIsLoading(bool) {
    return {
        type:      'REFERRALS_IS_LOADING',
        isLoading: bool
    };
}

export function referralsFetchDataSuccess(items) {
    return {
        type: 'REFERRALS_FETCH_DATA_SUCCESS',
        items
    };
}

export function referralsFetchData(url) {
    return dispatch => {
        dispatch(referralsIsLoading(true));

        fetch(new Request(url + '/users/profile/referrals?expand=profile,icon', {
            method:  'GET',
            headers: new Headers({'Authorization': sessionStorage.getItem('jwt')}),
        }))
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(referralsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                console.log('User api', items);
                dispatch(referralsFetchDataSuccess(items))
            })
            .catch(() => dispatch(referralsHasErrored(true)));
    }
}

export function inviteUpdateHasErrored(bool) {
    return {
        type:       'INVITE_UPDATE_HAS_ERRORED',
        hasErrored: bool
    };
}

export function inviteUpdateIsLoading(bool) {
    return {
        type:      'REFERRALS_IS_LOADING',
        isLoading: bool
    };
}


export function inviteUpdateSuccess(items) {
    return {
        type: 'INVITE_UPDATE_SUCCESS',
        items
    };
}

export function inviteUpdateData(url, data) {
    return dispatch => {
        dispatch(inviteUpdateIsLoading(true));
        console.log('DATA', data);

       let datas = new FormData()
        datas.set('invite_code', data.invite_code)

        axios.post(url + '/users/profile/invite', datas, {
            headers: {
                'Content-Type':  'multipart/form-data',
                'Authorization': sessionStorage.getItem('jwt')
            }
        })
      /*  fetch(new Request(url + '/users/profile/invite', {
            method:  'POST',
            headers: new Headers({'Authorization': sessionStorage.getItem('jwt')}),
            body: JSON.stringify(data)
        }))*/
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(inviteUpdateIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                console.log('User api', items);
                dispatch(inviteUpdateSuccess(items))
            })
            .catch(() => dispatch(inviteUpdateHasErrored(true)));
    }
}
