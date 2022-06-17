import { SEARCH_ACTION_TYPES } from "../helpers/actionTypes";

export const handleSearch = (event) => {
    event.preventDefault();
    const text = event.currentTarget[0].value;
    return dispatch => {
        dispatch({ type: SEARCH_ACTION_TYPES.change, payload: text });
    }
};

export const searchReducer = (state = "", action) => {
    switch (action.type) {
        case SEARCH_ACTION_TYPES.change:
            return action.payload;
        default:
            return state
    }
};
