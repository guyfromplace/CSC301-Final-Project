import { CAPTCHA_ACTION_TYPES } from "../helpers/actionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

export const verifyCallback = (token) => {
    if (token !== undefined && token !== "") {
        return dispatch => {
            dispatch({type: CAPTCHA_ACTION_TYPES.add, payload: token});
        }
    }
    return dispatch => {
        dispatch({type: CAPTCHA_ACTION_TYPES.ignore})
    }
};

export const updateCaptchaToken = token => {
    return (dispatch, getState) => {
        if (getState().captcha === null) {
            dispatch({
                type: CAPTCHA_ACTION_TYPES.add,
                payload: token
            });
        }
    }
};

export const captchaReducer = (state = null, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return null;
        case CAPTCHA_ACTION_TYPES.add:
            return action.payload;
        default:
            return state
    }
};
