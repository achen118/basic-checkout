import * as authAPIUtil from '../util/authAPIUtil';
import { receiveErrors, clearErrors } from './errorsActions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const CLEAR_STORE = "CLEAR_STORE";

export const receiveCurrentUser = email => {
    return {
        type: RECEIVE_CURRENT_USER,
        email
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
                dispatch(receiveCurrentUser(auth.email));
                dispatch(clearErrors());
            }, errors => dispatch(receiveErrors(errors.response.data))
        );
};

export const signUp = auth => dispatch => {
    return authAPIUtil.signUp(auth)
        .then(reponse => {
                // console.log(localStorage);
                // dispatch(receiveCurrentUser(auth.email));
                dispatch(clearErrors());
            }, errors => dispatch(receiveErrors(errors.response.data))
        );
};