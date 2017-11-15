import { connect } from 'react-redux';
import CheckoutPage from './checkoutPage';
import { addSubscription } from '../../actions/subscriptionsActions';

const mapStateToProps = state => {
    return {
        membershipPlans: state.membershipPlans,
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSubscription: subscription => dispatch(addSubscription(subscription))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutPage);