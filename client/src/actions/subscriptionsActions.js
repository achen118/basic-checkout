import * as subscriptionsAPIUtil from '../util/subscriptionsAPIUtil';
import { receiveErrors, clearErrors } from './errorsActions';

export const RECEIVE_ALL_SUBSCRIPTIONS = "RECEIVE_ALL_SUBSCRIPTIONS";
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";

// export const receiveAllSubscriptions = subscriptions => {
//     return {
//         type: RECEIVE_ALL_SUBSCRIPTIONS,
//         subscriptions
//     };
// };

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
            }, errors => dispatch(receiveErrors(errors.response.data))
        );
};