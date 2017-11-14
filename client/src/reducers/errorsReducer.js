import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errorsActions';
import { CLEAR_STORE } from '../actions/authActions';

const ErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        case CLEAR_STORE:
            return [];
        default:
            return state;
    }
};

export default ErrorsReducer;