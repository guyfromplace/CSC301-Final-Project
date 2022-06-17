import { FETCH_PRICES_ACTION_TYPES } from "../helpers/actionTypes";

export const pricesReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_PRICES_ACTION_TYPES.success:
            return action.payload.data;
        default:
            return state;
    }
};
