import * as membershipPlansAPIUtil from '../util/membershipPlansAPIUtil';
import { receiveErrors, clearErrors } from './errorsActions';

export const RECEIVE_ALL_MEMBERSHIP_PLANS = "RECEIVE_ALL_MEMBERSHIP_PLANS";
export const RECEIVE_MEMBERSHIP_PLAN = "RECEIVE_MEMBERSHIP_PLAN";

export const receiveAllMembershipPlans = membershipPlans => {
    return {
        type: RECEIVE_ALL_MEMBERSHIP_PLANS,
        membershipPlans
    };
};

export const receiveMembershipPlan = membershipPlan => {
    return {
        type: RECEIVE_MEMBERSHIP_PLAN,
        membershipPlan
    };
};

export const fetchAllMembershipPlans = () => dispatch => {
    return membershipPlansAPIUtil.fetchAllMembershipPlans()
        .then(response => { 
            dispatch(receiveAllMembershipPlans(response.data));
            dispatch(clearErrors());
            }, error => dispatch(receiveErrors(["No membership plans available"]))
        );
};

export const fetchMembershipPlan = membershipPlanId => dispatch => {
    return membershipPlansAPIUtil.fetchMembershipPlan(membershipPlanId)
        .then(response => { 
            dispatch(receiveMembershipPlan(response.data));
            dispatch(clearErrors());
            }, error => console.log(error)
        );
};