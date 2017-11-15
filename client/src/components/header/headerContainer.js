import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/authActions';

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
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
)(Header);