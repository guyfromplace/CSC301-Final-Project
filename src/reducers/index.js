import { combineReducers } from "redux";
import { brandsReducer } from "./brandsReducer";
import {captchaReducer} from "./captchaReducer";
import { cpuReducer } from "./cpuReducer";
import { moboReducer } from './moboReducer';
import { filterReducer } from "./filterReducer";
import { pricesReducer }  from "./pricesReducer";
import { routerReducer } from "react-router-redux";
import { searchReducer } from "./searchReducer";
import { gpuReducer } from "./gpuReducer";
import { psReducer } from "./psReducer";
import { ramReducer } from "./ramReducer";
import { storageReducer } from "./storageReducer";
import { caseReducer } from "./caseReducer";
import { buildReducer } from "./buildReducer";
import { credentialsFormReducer } from "./credentialsFormReducer";
import {userInfoReducer} from "./userInfoReducer";
import {viewBuildsReducer} from "./viewBuildsReducer";

const allReducers = combineReducers({
    brands: brandsReducer,
    captcha:  captchaReducer,
    CPU: cpuReducer,
    Motherboard: moboReducer,
    GPU: gpuReducer,
    'Power Supply': psReducer,
    RAM: ramReducer,
    Storage: storageReducer,
    Case: caseReducer,
    filter: filterReducer,
    credentialsForm: credentialsFormReducer,
    prices: pricesReducer,
    routing: routerReducer,
    search: searchReducer,
    build: buildReducer,
    userInfo: userInfoReducer,
    viewBuilds: viewBuildsReducer
});

export default allReducers;
