import {FILTER_BRAND_ACTION_TYPES, FILTER_PRICE_ACTION_TYPES, FILTER_CPUSOCKET_ACTION_TYPES} from "../helpers/actionTypes";
import {FILTER_FORMFACTOR_ACTION_TYPES, FILTER_CHIPSET_ACTION_TYPES, FILTER_INTERFACE_ACTION_TYPES} from "../helpers/actionTypes";
import {FILTER_EFFICIENCY_ACTION_TYPES, FILTER_TYPE_ACTION_TYPES, FILTER_CAPACITY_ACTION_TYPES} from "../helpers/actionTypes";
import {FILTER_SPEED_ACTION_TYPES, FILTER_PROTOCOL_ACTION_TYPES, FILTER_COLOR_ACTION_TYPES} from "../helpers/actionTypes";
import {FILTER_CORES_ACTION_TYPES, FILTER_POWER_ACTION_TYPES, FILTER_CLOCK_ACTION_TYPES} from "../helpers/actionTypes";
import {FILTER_VRAM_ACTION_TYPES, FILTER_SLOTS_ACTION_TYPES} from "../helpers/actionTypes";

import { LOCATION_CHANGE } from "react-router-redux";

const initialState = {
    brands: [],
    priceRange: [],
    cpusocket: [],
    formfactor: [],
    chipset: [],
    'interface': [],
    efficiency: [],
    type: [],
    capacity: [],
    speed: [],
    protocol: [],
    color: [],
    
};

export const handleCheck = (event) => {
    const isChecked = event.currentTarget.checked;
    const brand = event.currentTarget.name;
    return isChecked ? dispatch => {
        dispatch({ type: FILTER_BRAND_ACTION_TYPES.add, payload: brand });
    } : dispatch => {
        dispatch({ type: FILTER_BRAND_ACTION_TYPES.remove, payload: brand });
    }
};

export const handleSliderChange = (event) => {
    return dispatch => {
        dispatch({ type: FILTER_PRICE_ACTION_TYPES.change, payload: event });
    }
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return initialState;
        case FILTER_BRAND_ACTION_TYPES.add:
            if (!state.brands.includes(action.payload)) {
                return {
                    ...state,
                    brands: [...state.brands, action.payload]
                };
            }
            return state;
        case FILTER_BRAND_ACTION_TYPES.remove:
            if (state.brands.includes(action.payload)) {
                return {
                    ...state,
                    brands: state.brands.filter(brand => brand !== action.payload)
                }
            }
            return state;
        case FILTER_PRICE_ACTION_TYPES.change:
            return { ...state, priceRange: action.payload };
        default:
            return state
    }
};
