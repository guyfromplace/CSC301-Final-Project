import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Button, Col, Form} from "react-bootstrap";
import LoginErrorComponent from "./LoginErrorComponent";
import ConditionalComponent from "./ConditionalComponent";
import { Redirect } from "react-router";

export default class SignInComponent extends Component {
    static propTypes = {
        fetchUserInfo: PropTypes.func.isRequired,
        redirect: PropTypes.bool.isRequired,
        failedLogin: PropTypes.bool,
        isValid: PropTypes.bool,
        handleSignIn: PropTypes.func.isRequired
    };
    render() {
        return(
            this.props.isValid === true ?
                <div>
                    <Col style={{textAlign : "center"}}>You have successfully signed in</Col>
                    {
                        this.props.redirect ?
                        <Redirect to="/home"/> :
                            <div />
                    }
                </div> :
                <Col>
                    <ConditionalComponent isVisible={this.props.isUsernameValid === false} GivenComponent={LoginErrorComponent} />
                    <Form onSubmit={event => this.props.handleSignIn(event)}>
                        <Form.Group controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
        );
    }
}
