import { RECEIVE_ALL_MEMBERSHIP_PLANS } from '../actions/membershipPlansActions';

const MembershipPlansReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_MEMBERSHIP_PLANS:
            return action.membershipPlans;
        default:
            return state;
    }
};

export default MembershipPlansReducer;