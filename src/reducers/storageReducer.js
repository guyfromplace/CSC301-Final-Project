import { FETCH_STORAGE_ACTION_TYPES } from "../helpers/actionTypes";

export const storageReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_STORAGE_ACTION_TYPES.success:
            return action.payload.data;
        default:
            return state
    }
};
