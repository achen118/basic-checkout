import * as subscriptionsAPIUtil from '../util/subscriptionsAPIUtil';
import { clearErrors } from './errorsActions';

export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";

export const receiveSubscription = subscription => {
    return {
        type: RECEIVE_SUBSCRIPTION,
        subscription
    };
};

export const fetchSubscription = () => dispatch => {
    return subscriptionsAPIUtil.fetchSubscription()
        .then(response => {
            dispatch(receiveSubscription(response.data));
            dispatch(clearErrors());
        }, errors => console.log(errors)
    );
};

export const addSubscription = subscription => dispatch => {
    return subscriptionsAPIUtil.addSubscription(subscription)
        .then(response => {
            dispatch(receiveSubscription(response.data));
            dispatch(clearErrors());
        }
    );
};