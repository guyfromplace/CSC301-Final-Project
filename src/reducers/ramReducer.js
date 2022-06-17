import { FETCH_RAM_ACTION_TYPES } from "../helpers/actionTypes";

export const ramReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_RAM_ACTION_TYPES.success:
            return action.payload.data;
        default:
            return state
    }
};
