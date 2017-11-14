import { connect } from 'react-redux';
import SubscriptionPage from './subscriptionPage';
import { logout } from '../../actions/authActions';

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscriptionPage);