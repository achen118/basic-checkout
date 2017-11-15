import { connect } from 'react-redux';
import SubscriptionPage from './subscriptionPage';
import { fetchAllMembershipPlans } from '../../actions/membershipPlansActions';

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        membershipPlans: state.membershipPlans,
        subscriptions: state.subscriptions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllMembershipPlans: () => dispatch(fetchAllMembershipPlans())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscriptionPage);