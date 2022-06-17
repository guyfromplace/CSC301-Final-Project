import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReCaptcha } from "react-recaptcha-google";

class CaptchaComponent extends Component {
    componentDidMount() {
        if (this.captcha) {
            this.captcha.reset();
        }
    }

    onLoadRecaptcha() {
        if (this.captcha) {
            this.captcha.reset();
        }
    }

    render() {
        return (
            <div>
                <ReCaptcha
                    ref={(el) => {this.captcha = el;}}
                    size="normal"
                    data-theme="dark"
                    render="explicit"
                    sitekey="6Lem8pYUAAAAAKe1OuNDkqjmnWLW5OGcJb4nuNPW"
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.props.verifyCallback}
                />
            </div>
        );
    };
}
CaptchaComponent.propTypes = {
    verifyCallback: PropTypes.func.isRequired
};

export default CaptchaComponent;
