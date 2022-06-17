import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignInOrRegisterComponent from '../Components/SignInOrRegisterComponent';
import {
    changeCredentialsFormType,
    verifyUsername,
    verifyName,
    verifyPassword,
    addUsername,
    addName,
    addPassword,
    handleTabChange
} from "../reducers/credentialsFormReducer";
import { updateCaptchaToken, verifyCallback } from "../reducers/captchaReducer";
import { registerAccount, signInAccount } from "../helpers/apiRequests";

class SignInOrRegisterContainer extends Component {
    static propTypes = {
        formType: PropTypes.string.isRequired,
        failedLogin: PropTypes.bool,
        fetchUserInfo: PropTypes.func.isRequired,
        handleSignIn: PropTypes.func.isRequired,
        handleRegister: PropTypes.func.isRequired,
        handleTabChange: PropTypes.func.isRequired,
        isCaptcha: PropTypes.bool,
        isUsernameValid: PropTypes.bool,
        isNameValid: PropTypes.bool,
        isPasswordValid: PropTypes.bool,
        isValid: PropTypes.bool,
        captcha: PropTypes.string,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        registerAccount: PropTypes.func.isRequired,
        signInAccount: PropTypes.func.isRequired,
        verifyCallback: PropTypes.func.isRequired,
        redirect: PropTypes.bool.isRequired,
        userInfo: PropTypes.object
    };

    render() {
        if (this.props.isValid &&
            this.props.formType === "r"
        ) {
            this.props.registerAccount(
                this.props.name,
                this.props.username,
                this.props.password
            )
        }
        else if (this.props.isValid &&
            this.props.formType === "s"
        ) {
            this.props.signInAccount(this.props.username, this.props.password)
        }
        return(
            <div>
                <SignInOrRegisterComponent {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        failedLogin: state.credentialsForm.type === "s" && state.credentialsForm.loggedIn === false,
        formType: state.credentialsForm.type,
        isValid:
            (
                state.credentialsForm.type === "s" &&
                state.credentialsForm.isUsernameValid &&
                state.credentialsForm.isPasswordValid
            ) ||
            (
                state.credentialsForm.type === "r" &&
                state.credentialsForm.isNameValid &&
                state.credentialsForm.isUsernameValid &&
                state.credentialsForm.isPasswordValid &&
                state.captcha !== null && state.captcha !== ""
            ),
        isNameValid: state.credentialsForm.isNameValid,
        isUsernameValid: state.credentialsForm.isUsernameValid,
        isPasswordValid: state.credentialsForm.isPasswordValid,
        username: state.credentialsForm.username,
        name: state.credentialsForm.name,
        password: state.credentialsForm.password,
        captcha: state.captcha,
        redirect: state.credentialsForm.redirect
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSignIn: event => {
            event.preventDefault();
            dispatch(changeCredentialsFormType("s"));
            dispatch(addUsername(event.target[0].value));
            dispatch(addPassword(event.target[1].value));
            dispatch(verifyUsername(event.target[0].value, "s"));
            dispatch(verifyPassword(event.target[1].value));
        },
        handleRegister: event => {
            event.preventDefault();
            dispatch(updateCaptchaToken(""));
            dispatch(changeCredentialsFormType("r"));
            dispatch(addUsername(event.target[1].value));
            dispatch(addName(event.target[0].value));
            dispatch(addPassword(event.target[2].value));
            dispatch(verifyUsername(event.target[1].value, "r"));
            dispatch(verifyName(event));
            dispatch(verifyPassword(event.target[2].value));
        },
        handleTabChange: () => {
            dispatch(handleTabChange());
        },
        registerAccount: (name, username, password) => {
            dispatch(registerAccount(name, username, password));
        },
        signInAccount: (username, password) => {
            dispatch(signInAccount(username, password));
            ownProps.fetchUserInfo();
        },
        verifyCallback: token => {
            dispatch(verifyCallback(token));
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInOrRegisterContainer);
