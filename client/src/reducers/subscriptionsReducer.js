import merge from 'lodash/merge';
import { RECEIVE_ALL_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION } from '../actions/subscriptionsActions';
import { CLEAR_STORE } from '../actions/authActions';

const defaultState = {
    allMembershipPlanIds: [],
    byMembershipPlanId: {}
};

const SubscriptionsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_ALL_SUBSCRIPTIONS:
            nextState = merge({}, defaultState);
            action.subscriptions.forEach(subscription => {
                if (!nextState.allMembershipPlanIds.includes(subscription.membership_plan_id)) {
                    nextState.allMembershipPlanIds.push(subscription.membership_plan_id);
                }
                nextState.byMembershipPlanId[subscription.membership_plan_id] = subscription;
            });
            return nextState;
        case RECEIVE_SUBSCRIPTION:
            nextState = merge({}, state);
            if (!nextState.allMembershipPlanIds.includes(action.subscription.membership_plan_id)) {
                nextState.allMembershipPlanIds.push(action.subscription.membership_plan_id);
            }
            nextState.byMembershipPlanId[action.subscription.membership_plan_id] = action.subscription;
            return nextState;
        case CLEAR_STORE:
            return [];
        default:
            return state;
    }
};

export default SubscriptionsReducer;