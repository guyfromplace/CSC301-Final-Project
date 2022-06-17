import {BUILD_ITEM_ACTION_TYPES} from "../helpers/actionTypes";

const initialState = {
    CPU: {id: "", name: ""},
    Motherboard: {id: "", name: ""},
    GPU: [],
    PS: {id: "", name: ""},
    RAM: [],
    Storage: [],
    Case: {id: "", name: ""},
};

export const handleAdd = (event) => {
    const ptype = event.currentTarget.value.split(",")[2];
    const id = event.currentTarget.value.split(",")[0];
    const name = event.currentTarget.value.split(",")[1];

    switch (ptype) {
        case "CPU":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.cpu, payload: [id, name] })};
        case "Motherboard":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.mobo, payload: [id, name] })};
        case "GPU":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.gpu, payload: [id, name] })};
        case "Power Supply":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.ps, payload: [id, name] })};
        case "RAM":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.ram, payload: [id, name] })};
        case "Storage":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.storage, payload: [id, name] })};
        case "Case":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES['case'], payload: [id, name] })};
        default:
            return
    }
};

export const handleRemove = (event) => {
    const ptype = event.currentTarget.value.split(",")[2];
    const id = event.currentTarget.value.split(",")[0];
    const name = event.currentTarget.value.split(",")[1];
    switch (ptype) {
        case "CPU":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removecpu, payload: [id, name] })};
        case "Motherboard":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removemobo, payload: [id, name] })};
        case "GPU":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removegpu, payload: [id, name] })};
        case "Power Supply":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removeps, payload: [id, name] })};
        case "RAM":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removeram, payload: [id, name] })};
        case "Storage":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removestorage, payload: [id, name] })};
        case "Case":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES['removecase'], payload: [id, name] })};
        default:
            return
    }
};

export const buildReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUILD_ITEM_ACTION_TYPES.cpu:
            return {...state, CPU: {id: action.payload[0], name: action.payload[1]}};
        case BUILD_ITEM_ACTION_TYPES.mobo:
            return {...state, Motherboard: {id: action.payload[0], name: action.payload[1]}};
        case BUILD_ITEM_ACTION_TYPES.gpu:
            return {...state, GPU: [...state.GPU, {id: action.payload[0], name: action.payload[1]} ]};
        case BUILD_ITEM_ACTION_TYPES.ps:
            return {...state, PS: {id: action.payload[0], name: action.payload[1]}};
        case BUILD_ITEM_ACTION_TYPES.ram:
            return {...state, RAM: [...state.RAM, {id: action.payload[0], name: action.payload[1]} ]};
        case BUILD_ITEM_ACTION_TYPES.storage:
            return {...state, Storage: [...state.Storage, {id: action.payload[0], name: action.payload[1]} ]};
        case BUILD_ITEM_ACTION_TYPES['case']:
            return {...state, Case: {id: action.payload[0], name: action.payload[1]}};
        case BUILD_ITEM_ACTION_TYPES.removecpu:
            return {...state, CPU:{id: "", name: ""}};
        case BUILD_ITEM_ACTION_TYPES.removemobo:
            return {...state, Motherboard:{id: "", name: ""}};
        case BUILD_ITEM_ACTION_TYPES.removegpu:
            var newState1 = [...state.GPU];
            var i;
            for (i = 0; i < state.GPU.length; i++){
                if (state.GPU[i].id === action.payload[0]) {
                    newState1.splice(i, 1);
                    return {...state, GPU: newState1};
                }
            }
            return state;
        case BUILD_ITEM_ACTION_TYPES.removeps:
            return {...state, PS:{id: "", name: ""}};
        case BUILD_ITEM_ACTION_TYPES.removeram:
            var newState1 = [...state.RAM];
            var i;
            for (i = 0; i < state.RAM.length; i++){
                if (state.RAM[i].id === action.payload[0]) {
                    newState1.splice(i, 1);
                    return {...state, RAM: newState1};
                }
            }
            return state;
        case BUILD_ITEM_ACTION_TYPES.removestorage:
            var newState1 = [...state.Storage];
            var i;
            for (i = 0; i < state.Storage.length; i++){
                if (state.Storage[i].id === action.payload[0]) {
                    newState1.splice(i, 1);
                    return {...state, Storage: newState1};
                }
            }
            return state;
        case BUILD_ITEM_ACTION_TYPES['removecase']:
            return {...state, Case:{id: "", name: ""}}
        default:
            return state
    }
};
