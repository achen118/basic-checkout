import merge from 'lodash/merge';
import { RECEIVE_ALL_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION } from '../actions/subscriptionsActions';
import { CLEAR_STORE } from '../actions/authActions';

const SubscriptionsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SUBSCRIPTIONS:
            return action.subscriptions;
        case RECEIVE_SUBSCRIPTION:
            return;
        case CLEAR_STORE:
            return [];
        default:
            return state;
    }
};

export default SubscriptionsReducer;