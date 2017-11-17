import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MembershipPlan from './membershipPlan';
import { receiveErrors, clearErrors } from '../../actions/errorsActions';

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveErrors: errors => dispatch(receiveErrors(errors)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MembershipPlan));