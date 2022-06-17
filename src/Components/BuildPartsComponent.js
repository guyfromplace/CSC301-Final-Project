import React, { Component } from "react";
import PropTypes from "prop-types";
import {Row, Col, Table, Form, Button} from "react-bootstrap";
import {toast} from 'react-toastify';
import {css} from 'glamor';
import ProductButtonComponent from "./ProductButtonComponent";
import BuildRemoveButtonComponent from '../Components/BuildRemoveButtonComponent';

export default class BuildPartsComponent extends Component {

    render() {
        var pTypes = {
            CPU: 'CPU',
            Motherboard: "Motherboard",
            GPU: "GPU",
            'Power Supply': 'PS',
            RAM: "RAM",
            Storage: "Storage",
            Case: "Case"
        };
        return (
            <Col>
                <Row>
                    <Table striped>
                        <thead>
                        <tr>
                            {
                                this.props.headers.map(h => <th key={`header-${h}`}>{h}</th>)
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.productTypes.map(p => {
                                return(
                                    <tr key={`row-${p}`}>
                                        <td>{p}</td>
                                        <td>
                                            {(this.props[pTypes[p]].length === 0 || this.props[pTypes[p]].id === "")
                                                ? <ProductButtonComponent productType={p}/>
                                                : p === "GPU" || p === "RAM" || p === "Storage" ?
                                                    <Table striped>
                                                        <tbody>
                                                        {this.props[pTypes[p]].map(item => {
                                                            return (
                                                                <tr>
                                                                    <td>{item.name}</td>
                                                                    <td>
                                                                        <BuildRemoveButtonComponent
                                                                            Name={item.name}
                                                                            _id={item.id}
                                                                            ptype={p}
                                                                            handleRemove={this.props.handleRemove}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            )})}
                                                        <tr><td><ProductButtonComponent productType={p}/></td></tr>
                                                        </tbody>
                                                    </Table>
                                                    :
                                                    <Table striped>
                                                        <tbody>
                                                        <tr>
                                                            <td>{this.props[pTypes[p]].name}</td>
                                                            <td>
                                                                <BuildRemoveButtonComponent
                                                                    Name={this.props[pTypes[p]].name}
                                                                    _id={this.props[pTypes[p]].id}
                                                                    ptype={p}
                                                                    handleRemove={this.props.handleRemove}
                                                                />
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </Table>
                                            }
                                        </td>
                                    </tr>
                                )})
                        }
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Form onSubmit={event => 
                        {
                            this.props.handleSaveBuild(event)
                            toast.success(`"${event.target[0].value}" saved as build`, 
                            {
                                position: toast.POSITION.TOP_RIGHT,
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                className: css({
                                    background:"darkgray !important",
                                    color: "white !important"
                                })
                            });
                        }}>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="formGridBuildName">
                                    <Form.Control type="buildName" placeholder="Enter build name" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit"
                                    disabled={!this.props.isLoggedIn}>
                                    Save build for later
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Row>
            </Col>
        );
    }
}

BuildPartsComponent.propTypes = {
    headers: PropTypes.array.isRequired,
    productTypes: PropTypes.array.isRequired,
    CPU: PropTypes.object.isRequired,
    Motherboard: PropTypes.object.isRequired,
    GPU: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    PS: PropTypes.object.isRequired,
    RAM: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    Storage: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    Case: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleSaveBuild: PropTypes.func.isRequired
};
