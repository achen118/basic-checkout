import { RECEIVE_ALL_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION } from '../actions/subscriptionsActions';
import merge from 'lodash/merge';

const SubscriptionsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SUBSCRIPTIONS:
            return action.subscriptions;
        case RECEIVE_SUBSCRIPTION:
            return;
        default:
            return state;
    }
};

export default SubscriptionsReducer;