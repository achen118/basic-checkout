export const RECEIVE_ALL_MEMBERSHIP_PLANS = "RECEIVE_ALL_MEMBERSHIP_PLANS";

export const receiveAllMembershipPlans = membershipPlans => {
    return {
        type: RECEIVE_ALL_MEMBERSHIP_PLANS,
        membershipPlans
    };
};