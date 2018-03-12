import {combineReducers} from 'redux';
import {userCredentials, userCredentialsHasErrored, userCredentialsIsLoading} from './redusers';

export default combineReducers({
    userCredentials,
    userCredentialsHasErrored,
    userCredentialsIsLoading
});