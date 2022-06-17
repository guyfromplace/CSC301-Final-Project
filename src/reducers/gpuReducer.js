import { FETCH_GPU_ACTION_TYPES } from "../helpers/actionTypes";

export const gpuReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_GPU_ACTION_TYPES.success:
            return action.payload.data;
        default:
            return state
    }
};
