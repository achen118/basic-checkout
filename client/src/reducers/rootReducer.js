import { combineReducers } from 'redux';
import MembershipPlansReducer from './membershipPlansReducer';
import MembershipPlanReducer from './membershipPlanReducer';
import SubscriptionReducer from './subscriptionReducer';
import ErrorsReducer from './errorsReducer';
import AuthReducer from './authReducer';

const RootReducer = combineReducers({
    currentUser: AuthReducer,
    membershipPlans: MembershipPlansReducer,
    membershipPlan: MembershipPlanReducer,
    subscription: SubscriptionReducer,
    errors: ErrorsReducer
});

export default RootReducer;