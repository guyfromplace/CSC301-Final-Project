import React from "react";
import "../Styles/App.css";
import { withRouter } from "react-router-dom"
import start_a_build from "../images/start_a_build.jpg";
import {Col, Row} from "react-bootstrap";
import {toast} from 'react-toastify';
import {css} from 'glamor';


const ListButton = withRouter(({ history }) => (
    <Row>
        <Col id="frontpage1_img_div" md={4}>
            <div onClick={() => { toast.success(`Feature Not Currently Implemented!`, 
                            {
                                position: toast.POSITION.TOP_RIGHT,
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                className: css({
                                    background:"darkred !important",
                                    color: "white !important"
                                })
                            });
                            }} className="frontpage1_img">
                <p className="img_desc">Search Pre-Built Computers</p>
            </div>
        </Col>
        <Col id="frontpage2_img_div" md={4}>
            <div onClick={() => { history.push("/list") }} className="frontpage2_img">
                <p className="img_desc">Start New Build</p>
            </div>
        </Col>
        <Col id="frontpage3_img_div" md={4}>
            <div onClick={() => { toast.success(`Feature Not Currently Implemented!`, 
                            {
                                position: toast.POSITION.TOP_RIGHT,
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                className: css({
                                    background:"darkred !important",
                                    color: "white !important"
                                })
                            });}} className="frontpage3_img">
                <p className="img_desc">Browse User Builds</p>
            </div>
        </Col>
    </Row>
));

const MainPageComponent = () => (
    <ListButton/>
);

export default MainPageComponent;
