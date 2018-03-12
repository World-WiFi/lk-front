
const initialUserState = {
    auth: {}
}

const langReducer = function(state = initialUserState, action) {
    switch(action.type) {
        case 'MULTILANG':
            return Object.assign({}, state, action.payload);
    }
    return state;
}

export default langReducer