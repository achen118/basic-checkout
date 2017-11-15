import { connect } from 'react-redux';
import AuthForm from './authForm';
import { login, signUp } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorsActions';

const mapStateToProps = state => {
    return {
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: auth => dispatch(login(auth)),
        signUp: auth => dispatch(signUp(auth)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthForm);