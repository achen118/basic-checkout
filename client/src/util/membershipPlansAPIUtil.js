import axios from 'axios';

export const fetchAllMembershipPlans = () => {
    return axios({
        url: '/api/membership_plans',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        }
    });
};

export const fetchMembershipPlan = membershipPlanId => {
    return axios({
        url: `/api/membership_plans/${membershipPlanId}`,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        }
    });
};