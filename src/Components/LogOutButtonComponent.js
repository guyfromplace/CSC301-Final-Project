import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class LogOutButtonComponent extends Component {
    static propTypes = {
        handleLogOut: PropTypes.func.isRequired
    };
    render() {
        return (
            <Button
                variant="primary"
                onClick={() => this.props.handleLogOut()}
            >
                Log Out
            </Button>
        );
    }

}

export default LogOutButtonComponent;
