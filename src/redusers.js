import {combineReducers} from 'redux';
import UsersRedusers from './modules/base/Users/Mnagement/redusers/index';
import UserAuth from './modules/base/redusers/auth';
import langReducer from './modules/base/redusers/lang'
import userCredentialsReducer from './modules/base/Users/Auth/redusers/index'
import referralsReducer from './modules/project/Referals/redusers/index'


const redusers = combineReducers({
    auth: UserAuth,
    lang: langReducer,
    users: UsersRedusers,
    user: userCredentialsReducer,
    referrals: referralsReducer
})


const allRedusers = (state, action) => {
    if (action.type === 'AUTH_LOGOUT_CLEAR') {
        console.log('state', state)
        state.user.userCredentials = null
    }

    return redusers(state, action)
}

export default allRedusers