import {combineReducers} from 'redux';
import {items, itemsHasErrored, itemsIsLoading} from './redusers';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});