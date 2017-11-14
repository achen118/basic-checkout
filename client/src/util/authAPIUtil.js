import axios from 'axios';

export const login = auth => {
    return axios({
        method: 'POST',
        url: '/api/user_token',
        data: { auth }
    });
};

export const signUp = auth => {
    return axios({
        method: 'POST',
        url: '/api/users',
        data: { auth }
    });
};