import { connect } from 'react-redux';
import SubscriptionPage from './subscriptionPage';
import { fetchAllMembershipPlans } from '../../actions/membershipPlansActions';
import { fetchSubscription } from '../../actions/subscriptionsActions';

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        membershipPlans: state.membershipPlans,
        subscription: state.subscription,
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllMembershipPlans: () => dispatch(fetchAllMembershipPlans()),
        fetchSubscription: () => dispatch(fetchSubscription())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscriptionPage);