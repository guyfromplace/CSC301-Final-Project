import React, { Component } from "react";
import BuildPartsComponent from "../Components/BuildPartsComponent"

import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { HEADERS } from "../helpers/tableHeaders";
import { PRODUCT_TYPES } from "../helpers/productTypes";
import { handleRemove } from "../reducers/buildReducer";
import {saveBuild} from "../helpers/apiRequests";

class BuildPartsContainer extends Component {
    static propTypes = {
        CPU: PropTypes.object.isRequired,
        Motherboard: PropTypes.object.isRequired,
        GPU: PropTypes.array.isRequired,
        PS: PropTypes.object.isRequired,
        RAM: PropTypes.array.isRequired,
        Storage: PropTypes.array.isRequired,
        'Case': PropTypes.object.isRequired,
        handleRemove: PropTypes.func.isRequired,
        handleSaveBuild: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <BuildPartsComponent
                    headers={ HEADERS["BUILD"] }
                    productTypes={ PRODUCT_TYPES }
                    CPU={ this.props.CPU }
                    Motherboard={ this.props.Motherboard }
                    GPU={ this.props.GPU }
                    PS={ this.props.PS }
                    RAM={ this.props.RAM }
                    Storage={ this.props.Storage }
                    Case={ this.props['Case'] }
                    handleRemove={ this.props.handleRemove }
                    handleSaveBuild={this.props.handleSaveBuild}
                    isLoggedIn={this.props.isLoggedIn}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        CPU: state.build.CPU,
        Motherboard: state.build.Motherboard,
        GPU: state.build.GPU,
        PS: state.build.PS,
        RAM: state.build.RAM,
        Storage: state.build.Storage,
        Case: state.build.Case,
        isLoggedIn: state.userInfo !== null
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleRemove: (event) => {
            dispatch(handleRemove(event));
        },
        handleSaveBuild: (event) => {
            dispatch(saveBuild(event));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(BuildPartsContainer);
