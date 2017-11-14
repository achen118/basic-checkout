export const RECEIVE_ALL_SUBSCRIPTIONS = "RECEIVE_ALL_SUBSCRIPTIONS";
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";

export const receiveAllSubscriptions = subscriptions => {
    return {
        type: RECEIVE_ALL_SUBSCRIPTIONS,
        subscriptions
    };
};

export const receiveSubscription = subscription => {
    return {
        type: RECEIVE_SUBSCRIPTION,
        subscription
    };
};