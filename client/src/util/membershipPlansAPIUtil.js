import axios from 'axios';

export const fetchAllMembershipPlans = () => {
    return axios({
        url: '/api/membership_plans',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        }
    });
};