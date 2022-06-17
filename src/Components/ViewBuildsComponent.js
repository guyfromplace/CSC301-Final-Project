import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Col, Row, Table, Container } from "react-bootstrap";


export default class ViewBuildsComponent extends Component {
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
        return(
        <Container>
            <Row>
                <Col>
                   {
                        Object.getOwnPropertyNames(this.props.builds).map(b => {
                            
                            return (
                                <Table striped bordered responsive key={`buildtable-${b}`} className={'buildTable'}>
                                    <tbody>
                                    <tr  key={`buildrow-Build_Name`}>
                                        <th style={{width:'30%'}} >Name</th>
                                        <td>{this.props.builds[b].Build_Name}</td>
                                    </tr>
                                    {
                                        this.props.productTypes.map(p => {
                                            var counter = 0;
                                            if (p === 'GPU' || p === 'RAM' || p === 'Storage'){
                                            return (
                                                <tr key={`buildrow-${b}-${p}`}>
                                                    <th>{p}</th>
                                                    <td>
                                                    <Table responsive striped key={`table-${b}-${p}`} className={'buildMultiPartTable'} style={{backgroundColor:'lightgray'}}>
                                                    <tbody>
                                                        {
                                                            this.props.builds[b][p].map(item => {
                                                                counter++;
                                                                return (
                                                                    
                                                                        <tr key={`row-${b}-${p}-${counter}-${item}`}>
                                                                            <th style={{width:'15%'}}>{counter}.</th>
                                                                            <td>{item}</td>
                                                                        </tr>
                                                                    
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                    </Table>
                                                    </td>
                                                </tr>
                                            )} else {
                                            return (
                                            
                                                <tr key={`buildrow-${b}-${p}`}>
                                                    <th>{p}</th>
                                                    <td>{this.props.builds[b][p]}</td>
                                                </tr>
                                            )}
                                        })
                                    }
                                    </tbody>
                                </Table>
                            )
                        })
                    }
                </Col>
            </Row>
            </Container>
        )
    }
    
}
ViewBuildsComponent.propTypes = {
    builds: PropTypes.object.isRequired
};
