import { RECEIVE_MEMBERSHIP_PLAN } from '../actions/membershipPlansActions';
import { CLEAR_STORE } from '../actions/authActions';

const MembershipPlanReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEMBERSHIP_PLAN:
            return action.membershipPlan;
        case CLEAR_STORE:
            return null;
        default:
            return state;
    }
};

export default MembershipPlanReducer;