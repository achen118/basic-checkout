import axios from 'axios';

export const fetchAllSubscriptions = () => {
    return axios({
        url: '/api/subscriptions',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        }
    });
};