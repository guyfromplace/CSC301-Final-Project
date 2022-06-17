import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBarComponent from './Components/NavBarComponent';
import MainPageContainer from './Containers/MainPageContainer';
import BuildPartsContainer from './Containers/BuildPartsContainer';
import ProductListContainer from './Containers/ProductListContainer';
import ProductPageContainer from './Containers/ProductPageContainer';
import SignInOrRegisterContainer from './Containers/SignInOrRegisterContainer';
import {toast, ToastContainer} from 'react-toastify';
import {css} from 'glamor';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route } from "react-router-dom";
import {connect} from "react-redux";
import { fetchUserInfo } from "./reducers/userInfoReducer";
import ViewBuildsContainer from "./Containers/ViewBuildsContainer";

class App extends Component {
    
    static propTypes = {
        
        userInfo: PropTypes.object,
        isLoggedIn: PropTypes.bool.isRequired,
        handleLogOut: PropTypes.func.isRequired,
        fetchUserInfo: PropTypes.func.isRequired,

    };

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="App">
                <ToastContainer 
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    
                />
                <NavBarComponent {...this.props} />
                <BrowserRouter>
                    <div>
                        <Route path="/(home|)" component={MainPageContainer} />
                        <Route path="/list" component={BuildPartsContainer} />
                        <Route path="/products/:product_type" component={ProductListContainer} />
                        <Route path="/part/:_id" component={ProductPageContainer} />
                        <Route path="/login" render={() => <SignInOrRegisterContainer {...this.props}/>} />
                        <Route path="/viewBuilds" component={ViewBuildsContainer} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
        isLoggedIn: localStorage.getItem("userInfo") !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserInfo: () => {
            dispatch(fetchUserInfo());
        },
        handleLogOut: () => {
            localStorage.removeItem("userInfo");
            dispatch(fetchUserInfo());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
