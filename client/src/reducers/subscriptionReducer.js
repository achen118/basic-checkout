import merge from 'lodash/merge';
import { RECEIVE_ALL_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION } from '../actions/subscriptionsActions';
import { CLEAR_STORE } from '../actions/authActions';

const SubscriptionReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SUBSCRIPTION:
            return action.subscription;
        case CLEAR_STORE:
            return [];
        default:
            return state;
    }
};

export default SubscriptionReducer;