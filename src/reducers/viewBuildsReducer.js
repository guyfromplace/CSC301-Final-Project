import {UPDATE_VIEW_BUILDS_ACTION_TYPES} from "../helpers/actionTypes";
import {LOCATION_CHANGE} from "react-router-redux";
const defaultState = {
    Build_Name: "",
    CPU: "",
    Motherboard: "",
    GPU: [],
    PS: "",
    RAM: [],
    Storage: [],
    Case: ""
};
export const viewBuildsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return state;
        case UPDATE_VIEW_BUILDS_ACTION_TYPES.success:
            return action.payload;
        case UPDATE_VIEW_BUILDS_ACTION_TYPES.startNewObject:
            let index1 = action.payload.index;
            return {...state, [index1]: {...defaultState}};
            //return [...state, {...defaultState}];
        case UPDATE_VIEW_BUILDS_ACTION_TYPES.addKeyValuePair:
            let index2 = action.payload.index;
            let key = action.payload.key;
           /*  let newState = [...state];
            //let newBuildState = newState.splice(index2, 1)[0];
            console.log(JSON.stringify(newState));
            newState[index2][key] = action.payload.value;
            console.log(JSON.stringify(newState)); */
            let newBuildState = {...state[index2]};
            switch (key){
                case "Build_Name":
                case "CPU":
                case "Motherboard":
                case "Case":
                case "Power Supply":
                    newBuildState[key] = action.payload.value;
                    return {...state, [index2]: {...newBuildState, [key]: action.payload.value}};
                case "GPU":
                case "RAM":
                case "Storage":
                    let newItems = [...newBuildState[key]];
                    newItems.push(action.payload.value);
                    return {...state, [index2]: {...newBuildState, [key]: newItems}};
            }
            //return [...newState];
        default:
            return state;
    }
};
