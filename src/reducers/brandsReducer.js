import { FETCH_BRANDS_ACTION_TYPES } from "../helpers/actionTypes";

export const brandsReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_BRANDS_ACTION_TYPES.success:
            return action.payload.data;
        default:
            return state
    }
};
