import { connect } from 'react-redux';
import SubscriptionPage from './subscriptionPage';
import { fetchAllMembershipPlans } from '../../actions/membershipPlansActions';
import { fetchAllSubscriptions } from '../../actions/subscriptionsActions';

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        membershipPlans: state.membershipPlans,
        subscriptions: state.subscriptions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllMembershipPlans: () => dispatch(fetchAllMembershipPlans()),
        fetchAllSubscriptions: () => dispatch(fetchAllSubscriptions())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscriptionPage);