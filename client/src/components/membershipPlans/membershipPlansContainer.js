import { connect } from 'react-redux';
import MembershipPlans from './membershipPlans';
import { fetchAllMembershipPlans } from '../../actions/membershipPlansActions';

const mapStateToProps = state => {
    return {
        membershipPlans: state.membershipPlans
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
)(MembershipPlans);