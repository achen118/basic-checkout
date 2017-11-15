import { connect } from 'react-redux';
import SubscriptionPage from './subscriptionPage';

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscriptionPage);