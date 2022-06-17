import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import BuildAddButtonComponent from '../Components/BuildAddButtonComponent';

export default class ProductPageComponent extends Component {
    render() {
        
        return (
            <Container>
                <Row>
                    <Col md="auto">
                        <img src={`/images/${this.props.product._id}.jpg`} width="250" height="250" />
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: true}}>
                        <Table striped>
                            <thead>
                                <tr>{this.props.headers.map(h => <th key={`header-${h}`}>{h}</th>)}</tr>
                            </thead>
                            <tbody>
                                <tr key={`row-productInfo`}>
                                {
                                    
                                    this.props.searchHeaders.map( h => 
                                    {
                                        return (
                                                <td key={`product-${h}-value`}>
                                                    {
                                                        this.props.product[h] !== undefined ? 
                                                        this.props.product[h].toString() :
                                                        "None"
                                                    }
                                                </td>
                                                
                                            
                                        )
                                    })
                                    
                                }
                                </tr>
                                <tr>
                                    <td>
                                        <BuildAddButtonComponent
                                            Name={ this.props.product.Name }
                                            _id={ this.props.product ? this.props.product._id : this.props._id}
                                            ptype={ this.props.productType ? this.props.productType : "CPU"}
                                            handleAdd={ this.props.handleAdd ? this.props.handleAdd : undefined}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
        
    }
}


ProductPageComponent.propTypes = {
    handleAdd: PropTypes.func.isRequired,
    headers: PropTypes.array.isRequired,
    searchHeaders: PropTypes.array.isRequired,
    product: PropTypes.object.isRequired,
    productType: PropTypes.string.isRequired
};