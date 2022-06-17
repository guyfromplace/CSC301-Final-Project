import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form } from "react-bootstrap";
import CaptchaComponent from "./CaptchaComponent";
import ConditionalComponent from "./ConditionalComponent";
import UsernameErrorComponent from "./UsernameErrorComponent";
import CaptchaErrorComponent from "./CaptchaErrorComponent";

export default class RegisterComponent extends Component {
    static propTypes = {
        handleRegister: PropTypes.func.isRequired,
        isCaptcha: PropTypes.bool,
        captcha: PropTypes.string,
        isUsernameValid: PropTypes.bool,
        isNameValid: PropTypes.bool,
        isPasswordValid: PropTypes.bool,
        isValid: PropTypes.bool,
        verifyCallback: PropTypes.func.isRequired
    };

    render() {
        return(
            this.props.isValid === true ?
                <Col style={{textAlign : "center"}}>You have successfully registered</Col> :
                <Col>
                    <ConditionalComponent
                        isVisible={this.props.isUsernameValid === false}
                        GivenComponent={UsernameErrorComponent} />
                    <ConditionalComponent
                        isVisible={this.props.captcha === ""}
                        GivenComponent={CaptchaErrorComponent} />
                    <Form onSubmit={event => this.props.handleRegister(event)}>
                        <Form.Group controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name"
                                          placeholder="Enter name"
                                          required
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username"
                                          placeholder="Enter username"
                                          required
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          placeholder="Password"
                                          required
                            />
                        </Form.Group>

                        <CaptchaComponent {...this.props} />

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>
        );
    }
};
