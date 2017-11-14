import { combineReducers } from 'redux';
import MembershipPlansReducer from './membershipPlansReducer';
import SubscriptionsReducer from './subscriptionsReducer';
import ErrorsReducer from './errorsReducer';
import AuthReducer from './authReducer';

const RootReducer = combineReducers({
    currentUser: AuthReducer,
    membershipPlans: MembershipPlansReducer,
    subscriptions: SubscriptionsReducer,
    errors: ErrorsReducer
});

export default RootReducer;