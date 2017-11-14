import jwtDecode from 'jwt-decode';
import * as authAPIUtil from '../util/authAPIUtil';
import { receiveErrors, clearErrors } from './errorsActions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const CLEAR_STORE = "CLEAR_STORE";

export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

export const clearStore = () => {
    return {
        type: CLEAR_STORE
    };
};

export const login = auth => dispatch => {
    return authAPIUtil.login(auth)
        .then(response => {
                localStorage.setItem('authToken', response.data.jwt);
                const decoded = jwtDecode(response.data.jwt);
                dispatch(receiveCurrentUser(decoded));
                dispatch(clearErrors());
            }, errors => dispatch(receiveErrors(errors.response.data))
        );
};

export const signUp = user => dispatch => {
    return authAPIUtil.signUp(user)
        .then(reponse => {
                dispatch(login(user));
                dispatch(clearErrors());
            }, errors => dispatch(receiveErrors(errors.response.data))
        );
};

export const logout = () => dispatch => {
    localStorage.removeItem('authToken');
    dispatch(clearStore());
};