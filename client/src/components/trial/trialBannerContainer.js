import { connect } from 'react-redux';
import TrialBanner from './trialBanner';

const mapStateToProps = state => {
    return {
        subscription: state.subscription
    };
};

export default connect(
    mapStateToProps
)(TrialBanner);