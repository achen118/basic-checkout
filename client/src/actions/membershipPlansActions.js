import * as membershipPlansAPIUtil from '../util/membershipPlansAPIUtil';
import { receiveErrors, clearErrors } from './errorsActions';

export const RECEIVE_ALL_MEMBERSHIP_PLANS = "RECEIVE_ALL_MEMBERSHIP_PLANS";

export const receiveAllMembershipPlans = membershipPlans => {
    return {
        type: RECEIVE_ALL_MEMBERSHIP_PLANS,
        membershipPlans
    };
};

export const fetchAllMembershipPlans = () => dispatch => {
    return membershipPlansAPIUtil.fetchAllMembershipPlans()
        .then(response => { 
            dispatch(receiveAllMembershipPlans(response.data));
            dispatch(clearErrors());
            }, errors => dispatch(receiveErrors(errors.response.data))
        );
};