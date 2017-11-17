import { connect } from 'react-redux';
import CheckoutPage from './checkoutPage';
import { addSubscription } from '../../actions/subscriptionsActions';
import { fetchMembershipPlan } from '../../actions/membershipPlansActions';
import { receiveErrors } from '../../actions/errorsActions';

const mapStateToProps = state => {
    return {
        membershipPlan: state.membershipPlan,
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSubscription: subscription => dispatch(addSubscription(subscription)),
        fetchMembershipPlan: membershipPlanId => dispatch(fetchMembershipPlan(membershipPlanId)),
        receiveErrors: errors => dispatch(receiveErrors(errors))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutPage);