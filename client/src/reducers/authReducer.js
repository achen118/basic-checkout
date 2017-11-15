import { RECEIVE_CURRENT_USER, CLEAR_STORE } from '../actions/authActions';

const AuthReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.user;
        case CLEAR_STORE:
            return null;
        default:
            return state;
    }
};

export default AuthReducer;