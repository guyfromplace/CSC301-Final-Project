import React, { Component } from "react";
import ProductListComponent from "../Components/ProductListComponent";

import { HEADERS, SEARCH_HEADERS } from "../helpers/tableHeaders";
import { SLIDER_FILTERABLES, CHECK_FILTERABLES } from "../helpers/filterables";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { fetchAllCpus, fetchBrands, fetchPrices, fetchAllMobos, fetchAllGPUs, fetchAllRAMs, fetchAllPSs, fetchAllStorages, fetchAllCases } from "../helpers/apiRequests";
import { handleSearch } from "../reducers/searchReducer";
import { handleCheck, handleSliderChange } from "../reducers/filterReducer";
import { handleAdd } from "../reducers/buildReducer";

class ProductListContainer extends Component {
    static propTypes = {
        brands: PropTypes.array.isRequired,
        fetchAllCpus: PropTypes.func.isRequired,
        fetchAllMobos: PropTypes.func.isRequired,
        fetchAllGPUs: PropTypes.func.isRequired,
        fetchAllRAMs: PropTypes.func.isRequired,
        fetchAllPSs: PropTypes.func.isRequired,
        fetchAllStorages: PropTypes.func.isRequired,
        fetchAllCases: PropTypes.func.isRequired,
        fetchBrands: PropTypes.func.isRequired,
        fetchPrices: PropTypes.func.isRequired,
        handleCheck: PropTypes.func.isRequired,
        handleSearch: PropTypes.func.isRequired,
        handleSliderChange: PropTypes.func.isRequired,
        handleAdd: PropTypes.func.isRequired,
        prices: PropTypes.array.isRequired,
        products: PropTypes.array.isRequired,
        productType: PropTypes.string.isRequired,
        currentPath: PropTypes.string.isRequired
    };

    componentDidMount() {
        this.props.fetchAllMobos();
        this.props.fetchAllCpus();
        this.props.fetchAllGPUs();
        this.props.fetchAllRAMs();
        this.props.fetchAllPSs();
        this.props.fetchAllStorages();
        this.props.fetchAllCases();
        this.props.fetchBrands(this.props.productType);
        this.props.fetchPrices(this.props.productType);
    }

    render() {
        const tableHeaders = HEADERS[this.props.productType];
        const search_Headers = SEARCH_HEADERS[this.props.productType];
        return tableHeaders ? (
            <div>
                <ProductListComponent
                    key="ProductListComponent"
                    brands={this.props.brands}
                    headers={tableHeaders}
                    searchHeaders={search_Headers}
                    handleCheck={this.props.handleCheck}
                    handleSearch={this.props.handleSearch}
                    handleSliderChange={this.props.handleSliderChange}
                    handleAdd={this.props.handleAdd}
                    prices={this.props.prices}
                    products={this.props.products}
                    productType={this.props.productType}
                    currentPath={this.props.currentPath}
                    history={this.props.history}
                />
            </div>
        ) : <div>Invalid Product Type</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    const products = state[ownProps.match.params.product_type];
    let filteredProducts = products.filter(p => {
        const fullName = `${p.Manufacturer} ${p.Name}`.toLowerCase();
        return fullName.includes(state.search.toLowerCase());
    });

    if (state.filter.brands.length > 0) {
        state.filter.brands.forEach(brand => {
            filteredProducts = filteredProducts.filter(p => p.Manufacturer.toLowerCase() === brand.toLowerCase());
        })
    }

    if (state.filter.priceRange.length === 2) {
        const low = state.filter.priceRange[0];
        const high = state.filter.priceRange[1];
        filteredProducts = filteredProducts.filter(p => p.Price >= low && p.Price <= high);
    }
    return {
        currentPath: ownProps.history.location.pathname,
        brands: state.brands,
        prices: state.prices,
        products: filteredProducts,
        productType: ownProps.match.params.product_type
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
        fetchBrands: (productType) => {
            dispatch(fetchBrands(productType));
        },
        fetchPrices: (productType) => {
            dispatch(fetchPrices(productType));
        },
        handleCheck: (event) => {
            dispatch(handleCheck(event));
        },
        handleSearch: (event) => {
            dispatch(handleSearch(event));
        },
        handleSliderChange: (event) => {
            dispatch(handleSliderChange(event));
        },
        handleAdd: (event) => {
            dispatch(handleAdd(event));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListContainer);

