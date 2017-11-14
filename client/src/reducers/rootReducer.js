import { combineReducers } from 'redux';
import MembershipPlansReducer from './membershipPlansReducer';
import SubscriptionsReducer from './subscriptionsReducer';
import ErrorsReducer from './errorsReducer';

const RootReducer = combineReducers({
    membershipPlans: MembershipPlansReducer,
    subscriptions: SubscriptionsReducer,
    errors: ErrorsReducer
});

export default RootReducer;