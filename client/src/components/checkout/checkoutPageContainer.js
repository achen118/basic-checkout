import { connect } from 'react-redux';
import CheckoutPage from './checkoutPage';
import { addSubscription } from '../../actions/subscriptionsActions';
import { fetchAllMembershipPlans } from '../../actions/membershipPlansActions';

const mapStateToProps = state => {
    return {
        membershipPlans: state.membershipPlans,
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSubscription: subscription => dispatch(addSubscription(subscription)),
        fetchAllMembershipPlans: () => dispatch(fetchAllMembershipPlans())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutPage);