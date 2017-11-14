import { RECEIVE_ALL_MEMBERSHIP_PLANS } from '../actions/membershipPlansActions';
import { CLEAR_STORE } from '../actions/authActions';

const MembershipPlansReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_MEMBERSHIP_PLANS:
            return action.membershipPlans;
        case CLEAR_STORE:
            return [];
        default:
            return state;
    }
};

export default MembershipPlansReducer;