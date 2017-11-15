import { connect } from 'react-redux';
import CheckoutPage from './checkoutPage';

const mapStateToProps = state => {
    return {
        membershipPlans: state.membershipPlans
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutPage);