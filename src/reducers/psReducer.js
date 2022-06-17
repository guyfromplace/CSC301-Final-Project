import { FETCH_PS_ACTION_TYPES } from "../helpers/actionTypes";

export const psReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PS_ACTION_TYPES.success:
            return action.payload.data;
        default:
            return state
    }
};
