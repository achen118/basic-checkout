import merge from 'lodash/merge';
import { RECEIVE_ALL_MEMBERSHIP_PLANS } from '../actions/membershipPlansActions';
import { CLEAR_STORE } from '../actions/authActions';

const defaultState = {
    allIds: [],
    byId: {}
};

const MembershipPlansReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_ALL_MEMBERSHIP_PLANS:
            nextState = merge({}, defaultState);
            action.membershipPlans.forEach(membershipPlan => {
                if (!nextState.allIds.includes(membershipPlan.id)) {
                    nextState.allIds.push(membershipPlan.id);
                }
                nextState.byId[membershipPlan.id] = membershipPlan;
            });
            return nextState;
        case CLEAR_STORE:
            return [];
        default:
            return state;
    }
};

export default MembershipPlansReducer;