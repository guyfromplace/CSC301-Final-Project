import { LOCATION_CHANGE } from "react-router-redux";
import {USER_INFO_ACTION_TYPES} from "../helpers/actionTypes";

export const fetchUserInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return dispatch => {
        dispatch({type: USER_INFO_ACTION_TYPES.update, payload: userInfo})
    }
};

export const userInfoReducer = (state = null, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return state;
        case USER_INFO_ACTION_TYPES.update:
            return action.payload;
        case USER_INFO_ACTION_TYPES.clear:
            return {};
        default:
            return state;
    }
};
