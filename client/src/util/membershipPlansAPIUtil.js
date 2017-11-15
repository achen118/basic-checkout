import axios from 'axios';

const authToken = localStorage.getItem('authToken');

export const fetchAllMembershipPlans = () => {
    return axios({
        url: '/api/membership_plans',
        headers: {
            'Authorization': 'Bearer ' + authToken
        }
    });
};