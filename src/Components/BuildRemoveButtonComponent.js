import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import {toast} from 'react-toastify';
import {css} from 'glamor';

export default class BuildRemoveButtonComponent extends Component {
    render() {
        return (
            <div>
                <Button
                    variant="primary"
                    
                    value={[ this.props._id , this.props.Name , this.props.ptype ]}
                    onClick={ (event) => 
                    {
                        this.props.handleRemove(event);
                        toast.success(this.props.Name + " removed", 
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
                    }}
                >
                    Remove
                </Button>
                
            </div>
        );
    }
}

BuildRemoveButtonComponent.propTypes = {
    _id: PropTypes.string.isRequired,
    ptype: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired
};