import axios from 'axios';

export const fetchSubscription = () => {
    return axios({
        url: '/api/subscriptions',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        }
    });
};

export const addSubscription = subscription => {
    return axios({
        method: 'POST',
        url: '/api/subscriptions',
        data: { subscription },
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        }
    });
};