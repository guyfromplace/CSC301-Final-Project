import { FETCH_CASE_ACTION_TYPES } from "../helpers/actionTypes";

export const caseReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_CASE_ACTION_TYPES.success:
            return action.payload.data;
        default:
            return state
    }
};
