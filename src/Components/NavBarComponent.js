import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from "react-bootstrap";
import LogOutButtonComponent from "./LogOutButtonComponent";
import logo from "../images/logo.png"

class NavBarComponent extends Component {
    static propTypes = {
        userInfo: PropTypes.object,
        handleLogOut: PropTypes.func.isRequired,
        fetchUserInfo: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchUserInfo();
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="home">
                    <div>
                        <img src={logo} style={{maxHeight : "50px", maxWidth : "50px", paddingRight: "10px"}} />
                        PC Empire
                    </div>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link /*onClick={() => `${this.props.history.push("viewBuilds")}`}*/ href="../viewBuilds">My Builds</Nav.Link>
                </Nav>
                {
                    this.props.userInfo ?
                    <Nav>
                        <Nav.Link href="">{this.props.userInfo.Name}</Nav.Link>
                        <LogOutButtonComponent {...this.props}/>
                    </Nav> :
                        <Nav>
                            <Nav.Link href="login">Login/Register</Nav.Link>
                        </Nav>
                }
            </Navbar>
        );
    }
}

export default NavBarComponent;
