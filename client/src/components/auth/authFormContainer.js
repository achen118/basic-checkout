import { connect } from 'react-redux';
import AuthForm from './authForm';
import { login, signUp } from '../../actions/authActions';

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: auth => dispatch(login(auth)),
        signUp: auth => dispatch(signUp(auth))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthForm);