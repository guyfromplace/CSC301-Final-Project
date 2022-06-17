import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

import SliderComponent from './SliderComponent';
import BuildAddButtonComponent from './BuildAddButtonComponent';

export default class ProductListComponent extends Component {
    render() {
        return (
            <Container>
                <Row id='itemSearchBar'>
                    <Col>
                        <Form
                            onSubmit={event => this.props.handleSearch(event)}
                        >
                            <Form.Row>
                                <Form.Group as={Col} md={{span: "3", offset: "8"}} controlId="productSearch">
                                    <Form.Control
                                        type="text"
                                        placeholder={`Search ${this.props.productType}s`}
                                    />
                                </Form.Group>
                                <Button type="submit">Search</Button>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col id='filterItems'>
                        <Row className='filterItemLabel'><p>Brand:</p></Row>
                        <Row className='filterBrand'>
                            <Form.Group>
                                {
                                    this.props.brands.map(brand => {
                                        return(
                                            <Row key={`checkbox-row-${brand}`}>
                                            <Form.Check
                                                key={`checkbox-${brand}`}
                                                name={brand}
                                                label={brand}
                                                onChange={event => this.props.handleCheck(event)}
                                                id={`validationForm-${brand}`}
                                            /></Row>
                                        )
                                    })
                                }
                            </Form.Group>
                        </Row>
                        <Row className='filterItemLabel'><p>Price Range:</p></Row>
                        <Row className='filterPrice'>
                            <SliderComponent
                                domain={
                                    this.props.prices.length > 1 ?
                                        [0, this.props.prices[this.props.prices.length - 1]] :
                                        [0, 100]
                                }
                                handleSliderChange={this.props.handleSliderChange}
                            />
                        </Row>
                    </Col>
                    <Col md={8} id='itemDisplay'>
                        <Table striped responsive>
                            <thead>
                                <tr>
                                    {
                                        this.props.headers.map(h => <th key={`header-${h}`}>{h}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.products.map(p => {
                                        return(

                                            <tr key={`row-${p.Name}`} className='productLink'>
                                                {
                                                    this.props.searchHeaders.map(h => {
                                                        var url = window.location.href;
                                                        url = url.replace(this.props.currentPath,'');
                                                        url = url.concat(`/part/${p._id}`);
                                                        url = `/part/${p._id}`;
                                                        return (
                                                            <td onClick={() => `${this.props.history.push(url)}`} key={`product-header-${p[h]}`}><a>{p[h]}</a></td>
                                                        )
                                                    })

                                                }
                                                <td>
                                                    <BuildAddButtonComponent
                                                        Name={p.Name}
                                                        ptype={this.props.productType}
                                                        _id={p._id}
                                                        handleAdd={this.props.handleAdd}
                                                    />
                                                </td>
                                            </tr>

                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

ProductListComponent.propTypes = {
    brands: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleSliderChange: PropTypes.func.isRequired,
    handleAdd: PropTypes.func.isRequired,
    headers: PropTypes.array.isRequired,
    searchHeaders: PropTypes.array.isRequired,
    prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    products: PropTypes.array.isRequired,
    productType: PropTypes.string.isRequired
};
