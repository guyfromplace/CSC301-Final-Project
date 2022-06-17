import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Nav, Tab } from "react-bootstrap";
import { loadReCaptcha } from "react-recaptcha-google";

import RegisterComponent from "./RegisterComponent";
import SignInComponent from "./SignInComponent";
import { Redirect } from "react-router";

export default class SignInOrRegisterComponent extends Component {
    static propTypes = {
        failedLogin: PropTypes.func.isRequired,
        fetchUserInfo: PropTypes.func.isRequired,
        handleSignIn: PropTypes.func.isRequired,
        handleRegister: PropTypes.func.isRequired,
        handleTabChange: PropTypes.func.isRequired,
        captcha: PropTypes.string,
        isCaptcha: PropTypes.bool,
        isUsernameValid: PropTypes.bool,
        isNameValid: PropTypes.bool,
        isPasswordValid: PropTypes.bool,
        isValid: PropTypes.bool,
        verifyCallback: PropTypes.func.isRequired,
        userInfo: PropTypes.object
    };

    componentDidMount() {
        loadReCaptcha();
    }

    render() {
        return (
            <Col className="signInOrRegisterComponent">
                <Tab.Container defaultActiveKey="login">
                    <Nav fill variant="tabs">
                        <Nav.Item>
                            <Nav.Link
                                eventKey="login"
                                onSelect={() => this.props.handleTabChange()}
                            >Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="register"
                                onSelect={() => this.props.handleTabChange()}
                            >Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="login">
                            {
                                this.props.userInfo ?
                                    <Redirect to="/home" /> :
                                    <SignInComponent {...this.props} />
                            }
                        </Tab.Pane>
                        <Tab.Pane eventKey="register">
                            <RegisterComponent { ...this.props } />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
        );
    }
}
