import axios from 'axios';

export const fetchAllMembershipPlans = () => {
    return axios({
        url: '/api/membership_plans'
    });
};