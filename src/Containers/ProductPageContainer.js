import React, { Component } from "react";
import ProductPageComponent from "../Components/ProductPageComponent";

import { FULL_HEADERS, SEARCH_FULL_HEADERS } from "../helpers/tableHeaders";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { fetchAllCpus, fetchAllMobos, fetchAllGPUs, fetchAllRAMs, fetchAllPSs, fetchAllStorages, fetchAllCases } from "../helpers/apiRequests";
import { handleAdd } from "../reducers/buildReducer";
import { PRODUCT_TYPES } from "../helpers/productTypes";

class ProductPageContainer extends Component {
    static propTypes = {
        fetchAllCpus: PropTypes.func.isRequired,
        fetchAllMobos: PropTypes.func.isRequired,
        fetchAllGPUs: PropTypes.func.isRequired,
        fetchAllRAMs: PropTypes.func.isRequired,
        fetchAllPSs: PropTypes.func.isRequired,
        fetchAllStorages: PropTypes.func.isRequired,
        fetchAllCases: PropTypes.func.isRequired,
        handleAdd: PropTypes.func.isRequired,
        product: PropTypes.object.isRequired,
        productType: PropTypes.string.isRequired
    };
    componentDidMount() {
        this.props.fetchAllMobos();
        this.props.fetchAllCpus();
        this.props.fetchAllGPUs();
        this.props.fetchAllRAMs();
        this.props.fetchAllPSs();
        this.props.fetchAllStorages();
        this.props.fetchAllCases();
        
    }
    render() {
        const tableHeaders = FULL_HEADERS[this.props.productType];
        const search_Headers = SEARCH_FULL_HEADERS[this.props.productType];
        return tableHeaders ? (
            <div>
                <ProductPageComponent
                    key="ProductPageComponent"
                    headers={tableHeaders}
                    searchHeaders={search_Headers}
                    product={this.props.product}
                    productType={this.props.productType}
                    handleAdd={this.props.handleAdd}
                    _id={this.props._id}
                />
            </div> )
            : <div> Not Defined </div>
        }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params._id;
    var prod = null;
    var pType = null;
    PRODUCT_TYPES.map(p => 
    {
        state[p].map(pd => 
        {
            if (pd._id === id){
                prod = pd;
                pType = p;
            }
        });
    });
    return {
        _id: ownProps.match.params._id,
        product: prod,
        productType: pType
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllCpus: () => {
            dispatch(fetchAllCpus());
        },
        fetchAllMobos: () => {
            dispatch(fetchAllMobos());
        },
        fetchAllGPUs: () => {
            dispatch(fetchAllGPUs());
        },
        fetchAllRAMs: () => {
            dispatch(fetchAllRAMs());
        },
        fetchAllPSs: () => {
            dispatch(fetchAllPSs());
        },
        fetchAllStorages: () => {
            dispatch(fetchAllStorages());
        },
        fetchAllCases: () => {
            dispatch(fetchAllCases());
        },
        handleAdd: (event) => {
            dispatch(handleAdd(event));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer);