import axios from 'axios';

const authToken = localStorage.getItem('authToken');

export const fetchAllSubscriptions = () => {
    return axios({
        url: '/api/subscriptions',
        headers: {
            'Authorization': 'Bearer ' + authToken
        }
    });
};