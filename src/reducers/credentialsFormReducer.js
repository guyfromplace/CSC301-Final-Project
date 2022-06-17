import {
    REGISTRATION_ACTION_TYPES,
    SIGN_IN_ACTION_TYPES,
    TAB_CHANGE,
    UPDATE_CREDENTIALS_FORM_TYPE,
    CAPTCHA_ACTION_TYPES
} from "../helpers/actionTypes";
import { LOCATION_CHANGE } from "react-router-redux";
import { fetchUsernameValid } from "../helpers/apiRequests";

export const addUsername = (username) => {
    return dispatch => {
        dispatch({
            type: REGISTRATION_ACTION_TYPES.addUsername,
            payload: username
        });
    }
};

export const addName = (fullName) => {
    return dispatch => {
        dispatch({
            type: REGISTRATION_ACTION_TYPES.addName,
            payload: fullName
        });
    }
};

export const addPassword = (password) => {
    return dispatch => {
        dispatch({
            type: REGISTRATION_ACTION_TYPES.addPassword,
            payload: password
        });
    }
};

export const handleTabChange = ()=> {
    return dispatch => {
        dispatch({
            type: TAB_CHANGE,
            payload: ""
        });
    }
};

export const changeCredentialsFormType = formType => {
    return dispatch => {
        dispatch({
            type: UPDATE_CREDENTIALS_FORM_TYPE,
            payload: formType
        });
    }
};

export const verifyUsername = (username, type) => {
    return dispatch => {
        dispatch(fetchUsernameValid(username, type));
    }
};

export const verifyName = event => {
    return dispatch => {
        dispatch({
            type: REGISTRATION_ACTION_TYPES.validName,
            payload: event.target[0].value !== ""
        });
    }
};

export const verifyPassword = password => {
    return dispatch => {
        dispatch({
            type: REGISTRATION_ACTION_TYPES.validPassword,
            payload: password !== ""
        });
    }
};

const initialState = {
    type: "",
    username: "",
    name: "",
    password: "",
    isUsernameValid: null,
    isNameValid: null,
    isPasswordValid: null,
    registered: null,
    loggedIn: null,
    userInfo: null,
    redirect: false
};

export const credentialsFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return initialState;
        case UPDATE_CREDENTIALS_FORM_TYPE:
            return {...state, type: action.payload };
        case TAB_CHANGE:
            return {
                ...state,
                type: action.payload,
                isUsernameValid: null,
                isNameValid: null,
                isPasswordValid: null
            };
        case REGISTRATION_ACTION_TYPES.addUsername:
            return {...state, username: action.payload};
        case REGISTRATION_ACTION_TYPES.addName:
            return {...state, name: action.payload};
        case REGISTRATION_ACTION_TYPES.addPassword:
            return {...state, password: action.payload};
        case REGISTRATION_ACTION_TYPES.validUsername.success:
            return {...state, isUsernameValid: action.payload};
        case REGISTRATION_ACTION_TYPES.validName:
            return {...state, isNameValid: action.payload};
        case REGISTRATION_ACTION_TYPES.validPassword:
            return {...state, isPasswordValid: action.payload};
        case REGISTRATION_ACTION_TYPES.registerAccount.success:
            return {...state, registered: action.payload};
        case REGISTRATION_ACTION_TYPES.registerAccount.failure:
            return {...state, registered: action.payload};
        case SIGN_IN_ACTION_TYPES.success:
            return {...state, loggedIn: true, userInfo: action.payload, redirect: true};
        case SIGN_IN_ACTION_TYPES.failure:
            return {...state, loggedIn: false, userInfo: null};
        default:
            return state
    }
};
