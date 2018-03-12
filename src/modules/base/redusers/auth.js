
const initialUserState = {
    auth: {}
}

const authReducer = function(state = initialUserState, action) {
    switch(action.type) {
        case 'AUTH_LOGIN':
            return Object.assign({}, state, action.payload);
    }
    return state;
}

export default authReducer