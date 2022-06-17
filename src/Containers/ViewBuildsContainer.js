import React, { Component } from 'react';
import ViewBuildsComponent from "../Components/ViewBuildsComponent";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchBuilds} from "../helpers/apiRequests";
import { fetchUserInfo } from "../reducers/userInfoReducer";
import { PRODUCT_TYPES } from "../helpers/productTypes";
import {Redirect} from 'react-router';
class ViewBuildsContainer extends Component {
    static propTypes = {
        userInfo: PropTypes.object,
        isLoggedIn: PropTypes.bool.isRequired,
        builds: PropTypes.object.isRequired
    };

    componentDidMount() {
        if (this.props.isLoggedIn){
            this.props.fetchBuilds();
        }
    }
    
    render() {
        if (this.props.isLoggedIn){
        return (
            <div>
                <ViewBuildsComponent 
                    builds = {this.props.builds}
                    userInfo = {this.props.userInfo}
                    productTypes = {PRODUCT_TYPES}
                />
            </div>
        )} else {
           return (<Redirect to="/login"/>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        builds: state.viewBuilds,
        isLoggedIn: localStorage.getItem("userInfo") !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserInfo: () => {
            dispatch(fetchUserInfo());
        },
        fetchBuilds: () => {
            dispatch(fetchBuilds());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (ViewBuildsContainer);
