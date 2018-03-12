import {combineReducers} from 'redux';
import {referrals, referralsHasErrored, referralsIsLoading} from './redusers';
import {inviteUpdateHasErrored, inviteUpdate} from './redusersInviteUpdate';

export default combineReducers({
    referrals,
    referralsHasErrored,
    referralsIsLoading,
    inviteUpdateHasErrored,
    inviteUpdate
});