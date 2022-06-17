const CAPTCHA_ACTION_ADD = "CAPTCHA_ACTION_ADD";
const CAPTCHA_ACTION_IGNORE = "CAPTCHA_ACTION_IGNORE";
export const CAPTCHA_ACTION_TYPES = {
    add: CAPTCHA_ACTION_ADD,
    ignore: CAPTCHA_ACTION_IGNORE,
};

const FETCH_MOBO_ACTION = "FETCH_MOBO_ACTION";
const FETCH_MOBO_ACTION_SUCCESS = "FETCH_MOBO_ACTION_SUCCESS";
const FETCH_MOBO_ACTION_FAILURE = "FETCH_MOBO_ACTION_FAILURE";
export const FETCH_MOBO_ACTION_TYPES = {
    pending: FETCH_MOBO_ACTION,
    success: FETCH_MOBO_ACTION_SUCCESS,
    failure: FETCH_MOBO_ACTION_FAILURE
};

const FETCH_CPU_ACTION = "FETCH_CPU_ACTION";
const FETCH_CPU_ACTION_SUCCESS = "FETCH_CPU_ACTION_SUCCESS";
const FETCH_CPU_ACTION_FAILURE = "FETCH_CPU_ACTION_FAILURE";
export const FETCH_CPU_ACTION_TYPES = {
    pending: FETCH_CPU_ACTION,
    success: FETCH_CPU_ACTION_SUCCESS,
    failure: FETCH_CPU_ACTION_FAILURE
};
const FETCH_GPU_ACTION = "FETCH_GPU_ACTION";
const FETCH_GPU_ACTION_SUCCESS = "FETCH_GPU_ACTION_SUCCESS";
const FETCH_GPU_ACTION_FAILURE = "FETCH_GPU_ACTION_FAILURE";
export const FETCH_GPU_ACTION_TYPES = {
    pending: FETCH_GPU_ACTION,
    success: FETCH_GPU_ACTION_SUCCESS,
    failure: FETCH_GPU_ACTION_FAILURE
};
const FETCH_PS_ACTION = "FETCH_PS_ACTION";
const FETCH_PS_ACTION_SUCCESS = "FETCH_PS_ACTION_SUCCESS";
const FETCH_PS_ACTION_FAILURE = "FETCH_PS_ACTION_FAILURE";
export const FETCH_PS_ACTION_TYPES = {
    pending: FETCH_PS_ACTION,
    success: FETCH_PS_ACTION_SUCCESS,
    failure: FETCH_PS_ACTION_FAILURE
};
const FETCH_RAM_ACTION = "FETCH_RAM_ACTION";
const FETCH_RAM_ACTION_SUCCESS = "FETCH_RAM_ACTION_SUCCESS";
const FETCH_RAM_ACTION_FAILURE = "FETCH_RAM_ACTION_FAILURE";
export const FETCH_RAM_ACTION_TYPES = {
    pending: FETCH_RAM_ACTION,
    success: FETCH_RAM_ACTION_SUCCESS,
    failure: FETCH_RAM_ACTION_FAILURE
};
const FETCH_STORAGE_ACTION = "FETCH_STORAGE_ACTION";
const FETCH_STORAGE_ACTION_SUCCESS = "FETCH_STORAGE_ACTION_SUCCESS";
const FETCH_STORAGE_ACTION_FAILURE = "FETCH_STORAGE_ACTION_FAILURE";
export const FETCH_STORAGE_ACTION_TYPES = {
    pending: FETCH_STORAGE_ACTION,
    success: FETCH_STORAGE_ACTION_SUCCESS,
    failure: FETCH_STORAGE_ACTION_FAILURE
};
const FETCH_CASE_ACTION = "FETCH_CASE_ACTION";
const FETCH_CASE_ACTION_SUCCESS = "FETCH_CASE_ACTION_SUCCESS";
const FETCH_CASE_ACTION_FAILURE = "FETCH_CASE_ACTION_FAILURE";
export const FETCH_CASE_ACTION_TYPES = {
    pending: FETCH_CASE_ACTION,
    success: FETCH_CASE_ACTION_SUCCESS,
    failure: FETCH_CASE_ACTION_FAILURE
};

const FETCH_BRANDS_ACTION = "FETCH_BRANDS_ACTION";
const FETCH_BRANDS_ACTION_SUCCESS = "FETCH_BRANDS_ACTION_SUCCESS";
const FETCH_BRANDS_ACTION_FAILURE = "FETCH_BRANDS_ACTION_FAILURE";
export const FETCH_BRANDS_ACTION_TYPES = {
    pending: FETCH_BRANDS_ACTION,
    success: FETCH_BRANDS_ACTION_SUCCESS,
    failure: FETCH_BRANDS_ACTION_FAILURE
};

const FETCH_PRICES_ACTION = "FETCH_PRICES_ACTION";
const FETCH_PRICES_ACTION_SUCCESS = "FETCH_PRICES_ACTION_SUCCESS";
const FETCH_PRICES_ACTION_FAILURE = "FETCH_PRICES_ACTION_FAILURE";
export const FETCH_PRICES_ACTION_TYPES = {
    pending: FETCH_PRICES_ACTION,
    success: FETCH_PRICES_ACTION_SUCCESS,
    failure: FETCH_PRICES_ACTION_FAILURE
};

const BUILD_ADD_CPU_ACTION = "BUILD_ADD_CPU_ACTION";
const BUILD_ADD_MOBO_ACTION = "BUILD_ADD_MOBO_ACTION";
const BUILD_ADD_GPU_ACTION = "BUILD_ADD_GPU_ACTION";
const BUILD_ADD_PS_ACTION = "BUILD_ADD_PS_ACTION";
const BUILD_ADD_RAM_ACTION = "BUILD_ADD_RAM_ACTION";
const BUILD_ADD_STORAGE_ACTION = "BUILD_ADD_STORAGE_ACTION";
const BUILD_ADD_CASE_ACTION = "BUILD_ADD_CASE_ACTION";
const BUILD_REMOVE_CPU_ACTION = "BUILD_REMOVE_CPU_ACTION";
const BUILD_REMOVE_MOBO_ACTION = "BUILD_REMOVE_MOBO_ACTION";
const BUILD_REMOVE_GPU_ACTION = "BUILD_REMOVE_GPU_ACTION";
const BUILD_REMOVE_PS_ACTION = "BUILD_REMOVE_PS_ACTION";
const BUILD_REMOVE_RAM_ACTION = "BUILD_REMOVE_RAM_ACTION";
const BUILD_REMOVE_STORAGE_ACTION = "BUILD_REMOVE_STORAGE_ACTION";
const BUILD_REMOVE_CASE_ACTION = "BUILD_REMOVE_CASE_ACTION";
export const BUILD_ITEM_ACTION_TYPES = {
    cpu: BUILD_ADD_CPU_ACTION,
    mobo: BUILD_ADD_MOBO_ACTION,
    gpu: BUILD_ADD_GPU_ACTION,
    ps: BUILD_ADD_PS_ACTION,
    ram: BUILD_ADD_RAM_ACTION,
    storage: BUILD_ADD_STORAGE_ACTION,
    'case': BUILD_ADD_CASE_ACTION,
    removecpu: BUILD_REMOVE_CPU_ACTION,
    removemobo: BUILD_REMOVE_MOBO_ACTION,
    removegpu: BUILD_REMOVE_GPU_ACTION,
    removeps: BUILD_REMOVE_PS_ACTION,
    removeram: BUILD_REMOVE_RAM_ACTION,
    removestorage: BUILD_REMOVE_STORAGE_ACTION,
    removecase: BUILD_REMOVE_CASE_ACTION
}

const FILTER_BRAND_ACTION_ADD = "FILTER_BRAND_ACTION_ADD";
const FILTER_BRAND_ACTION_REMOVE = "FILTER_BRAND_ACTION_REMOVE";
const FILTER_CPUSOCKET_ACTION_ADD = "FILTER_CPUSOCKET_ACTION_ADD";
const FILTER_CPUSOCKET_ACTION_REMOVE = "FILTER_CPUSOCKET_ACTION_REMOVE";
const FILTER_FORMFACTOR_ACTION_ADD = "FILTER_FORMFACTOR_ACTION_ADD";
const FILTER_FORMFACTOR_ACTION_REMOVE = "FILTER_FORMFACTOR_ACTION_REMOVE";
const FILTER_CHIPSET_ACTION_ADD = "FILTER_CHIPSET_ACTION_ADD";
const FILTER_CHIPSET_ACTION_REMOVE = "FILTER_CHIPSET_ACTION_REMOVE";
const FILTER_INTERFACE_ACTION_ADD = "FILTER_INTERFACE_ACTION_ADD";
const FILTER_INTERFACE_ACTION_REMOVE = "FILTER_INTERFACE_ACTION_REMOVE";
const FILTER_EFFICIENCY_ACTION_ADD = "FILTER_EFFICIENCY_ACTION_ADD";
const FILTER_EFFICIENCY_ACTION_REMOVE = "FILTER_EFFICIENCY_ACTION_REMOVE";
const FILTER_TYPE_ACTION_ADD = "FILTER_TYPE_ACTION_ADD";
const FILTER_TYPE_ACTION_REMOVE = "FILTER_TYPE_ACTION_REMOVE";
const FILTER_CAPACITY_ACTION_ADD = "FILTER_CAPACITY_ACTION_ADD";
const FILTER_CAPACITY_ACTION_REMOVE = "FILTER_CAPACITY_ACTION_REMOVE";
const FILTER_SPEED_ACTION_ADD = "FILTER_SPEED_ACTION_ADD";
const FILTER_SPEED_ACTION_REMOVE = "FILTER_SPEED_ACTION_REMOVE";
const FILTER_PROTOCOL_ACTION_ADD = "FILTER_PROTOCOL_ACTION_ADD";
const FILTER_PROTOCOL_ACTION_REMOVE = "FILTER_PROTOCOL_ACTION_REMOVE";
const FILTER_COLOR_ACTION_ADD = "FILTER_COLOR_ACTION_ADD";
const FILTER_COLOR_ACTION_REMOVE = "FILTER_COLOR_ACTION_REMOVE";
export const FILTER_BRAND_ACTION_TYPES = {
    add: FILTER_BRAND_ACTION_ADD,
    remove: FILTER_BRAND_ACTION_REMOVE,
};
export const FILTER_CPUSOCKET_ACTION_TYPES = {
    add: FILTER_CPUSOCKET_ACTION_ADD,
    remove: FILTER_CPUSOCKET_ACTION_REMOVE,
};
export const FILTER_FORMFACTOR_ACTION_TYPES = {
    add: FILTER_FORMFACTOR_ACTION_ADD,
    remove: FILTER_FORMFACTOR_ACTION_REMOVE,
};
export const FILTER_CHIPSET_ACTION_TYPES = {
    add: FILTER_CHIPSET_ACTION_ADD,
    remove: FILTER_CHIPSET_ACTION_REMOVE,
};
export const FILTER_INTERFACE_ACTION_TYPES = {
    add: FILTER_INTERFACE_ACTION_ADD,
    remove: FILTER_INTERFACE_ACTION_REMOVE,
};
export const FILTER_EFFICIENCY_ACTION_TYPES = {
    add: FILTER_EFFICIENCY_ACTION_ADD,
    remove: FILTER_EFFICIENCY_ACTION_REMOVE,
};
export const FILTER_TYPE_ACTION_TYPES = {
    add: FILTER_TYPE_ACTION_ADD,
    remove: FILTER_TYPE_ACTION_REMOVE,
};
export const FILTER_PROTOCOL_ACTION_TYPES = {
    add: FILTER_PROTOCOL_ACTION_ADD,
    remove: FILTER_PROTOCOL_ACTION_REMOVE,
};
export const FILTER_COLOR_ACTION_TYPES = {
    add: FILTER_COLOR_ACTION_ADD,
    remove: FILTER_COLOR_ACTION_REMOVE,
};

const FILTER_PRICE_ACTION_CHANGE = "FILTER_PRICE_ACTION_CHANGE";
const FILTER_CORES_ACTION_CHANGE = "FILTER_CORES_ACTION_CHANGE";
const FILTER_POWER_ACTION_CHANGE = "FILTER_POWER_ACTION_CHANGE";
const FILTER_CLOCK_ACTION_CHANGE = "FILTER_CLOCK_ACTION_CHANGE";
const FILTER_VRAM_ACTION_CHANGE = "FILTER_VRAM_ACTION_CHANGE";
const FILTER_SPEED_ACTION_CHANGE = "FILTER_SPEED_ACTION_CHANGE";
const FILTER_CAPACITY_ACTION_CHANGE = "FILTER_CAPACITY_ACTION_CHANGE";
const FILTER_SLOTS_ACTION_CHANGE = "FILTER_SLOTS_ACTION_CHANGE";

export const FILTER_PRICE_ACTION_TYPES = {
    change: FILTER_PRICE_ACTION_CHANGE
};
export const FILTER_CORES_ACTION_TYPES = {
    change: FILTER_CORES_ACTION_CHANGE
};
export const FILTER_POWER_ACTION_TYPES = {
    change: FILTER_POWER_ACTION_CHANGE
};
export const FILTER_CLOCK_ACTION_TYPES = {
    change: FILTER_CLOCK_ACTION_CHANGE
};
export const FILTER_VRAM_ACTION_TYPES = {
    change: FILTER_VRAM_ACTION_CHANGE
};
export const FILTER_SPEED_ACTION_TYPES = {
    add: FILTER_SPEED_ACTION_ADD,
    remove: FILTER_SPEED_ACTION_REMOVE,
    change: FILTER_SPEED_ACTION_CHANGE
};
export const FILTER_CAPACITY_ACTION_TYPES = {
    add: FILTER_CAPACITY_ACTION_ADD,
    remove: FILTER_CAPACITY_ACTION_REMOVE,
    change: FILTER_CAPACITY_ACTION_CHANGE
};
export const FILTER_SLOTS_ACTION_TYPES = {
    change: FILTER_SLOTS_ACTION_CHANGE
};

const REGISTRATION_ACTION_ADD_USERNAME = "REGISTRATION_ACTION_ADD_USERNAME";
const REGISTRATION_ACTION_VALID_USERNAME = "REGISTRATION_ACTION_VALID_USERNAME";
const REGISTRATION_ACTION_VALID_USERNAME_SUCCESS = "REGISTRATION_ACTION_VALID_USERNAME_SUCCESS";
const REGISTRATION_ACTION_VALID_USERNAME_FAILURE = "REGISTRATION_ACTION_VALID_USERNAME_FAILURE";
const REGISTRATION_ACTION_REGISTER_ACCOUNT = "REGISTRATION_ACTION_REGISTER_ACCOUNT";
const REGISTRATION_ACTION_REGISTER_ACCOUNT_SUCCESS = "REGISTRATION_ACTION_REGISTER_ACCOUNT_SUCCESS";
const REGISTRATION_ACTION_REGISTER_ACCOUNT_FAILURE = "REGISTRATION_ACTION_REGISTER_ACCOUNT_FAILURE";
const REGISTRATION_ACTION_ADD_NAME = "REGISTRATION_ACTION_ADD_NAME";
const REGISTRATION_ACTION_VALID_NAME = "REGISTRATION_ACTION_VALID_NAME";
const REGISTRATION_ACTION_ADD_PASSWORD = "REGISTRATION_ACTION_ADD_PASSWORD";
const REGISTRATION_ACTION_VALID_PASSWORD = "REGISTRATION_ACTION_VALID_PASSWORD";
export const REGISTRATION_ACTION_TYPES = {
    addUsername: REGISTRATION_ACTION_ADD_USERNAME,
    addName: REGISTRATION_ACTION_ADD_NAME,
    addPassword: REGISTRATION_ACTION_ADD_PASSWORD,
    registerAccount: {
        pending: REGISTRATION_ACTION_REGISTER_ACCOUNT,
        success: REGISTRATION_ACTION_REGISTER_ACCOUNT_SUCCESS,
        failure: REGISTRATION_ACTION_REGISTER_ACCOUNT_FAILURE
    },
    validUsername: {
        pending: REGISTRATION_ACTION_VALID_USERNAME,
        success: REGISTRATION_ACTION_VALID_USERNAME_SUCCESS,
        failure: REGISTRATION_ACTION_VALID_USERNAME_FAILURE
    },
    validName: REGISTRATION_ACTION_VALID_NAME,
    validPassword: REGISTRATION_ACTION_VALID_PASSWORD
};

const SEARCH_ACTION_SUCCESS = "SEARCH_ACTION_CHANGE";
export const SEARCH_ACTION_TYPES = {
    change: SEARCH_ACTION_SUCCESS
};

const SIGN_IN_ACTION = "SIGN_IN_ACTION";
const SIGN_IN_ACTION_SUCCESS = "SIGN_IN_ACTION_SUCCESS";
const SIGN_IN_ACTION_FAILURE = "SIGN_IN_ACTION_FAILURE";
export const SIGN_IN_ACTION_TYPES = {
    pending: SIGN_IN_ACTION,
    success: SIGN_IN_ACTION_SUCCESS,
    failure: SIGN_IN_ACTION_FAILURE
};

export const UPDATE_CREDENTIALS_FORM_TYPE = "UPDATE_CREDENTIALS_FORM_TYPE";
export const TAB_CHANGE = "TAB_CHANGE";

const USER_INFO_ACTION_UPDATE = "USER_INFO_ACTION_UPDATE";
const USER_INFO_ACTION_CLEAR = "USER_INFO_ACTION_CLEAR";
export const USER_INFO_ACTION_TYPES = {
    update: USER_INFO_ACTION_UPDATE,
    clear: USER_INFO_ACTION_CLEAR
};

const SAVE_BUILD_ACTION = "SAVE_BUILD_ACTION";
const SAVE_BUILD_ACTION_SUCCESS = "SAVE_BUILD_ACTION_SUCCESS";
const SAVE_BUILD_ACTION_FAILURE = "SAVE_BUILD_ACTION_FAILURE";
const SAVE_BUILD_ACTION_UPDATE_USER = "SAVE_BUILD_ACTION_UPDATE_USER";
const SAVE_BUILD_ACTION_UPDATE_USER_SUCCESS = "SAVE_BUILD_ACTION_UPDATE_USER_SUCCESS";
const SAVE_BUILD_ACTION_UPDATE_USER_FAILURE = "SAVE_BUILD_ACTION_UPDATE_USER_FAILURE";
export const SAVE_BUILD_ACTION_TYPES = {
    pending: SAVE_BUILD_ACTION,
    success: SAVE_BUILD_ACTION_SUCCESS,
    failure: SAVE_BUILD_ACTION_FAILURE,
    updateUser: {
        pending: SAVE_BUILD_ACTION_UPDATE_USER,
        success: SAVE_BUILD_ACTION_UPDATE_USER_SUCCESS,
        failure: SAVE_BUILD_ACTION_UPDATE_USER_FAILURE
    }
};

const UPDATE_VIEW_BUILDS_ACTION = "UPDATE_VIEW_BUILDS_ACTION";
const UPDATE_VIEW_BUILDS_ACTION_SUCCESS = "UPDATE_VIEW_BUILDS_ACTION_SUCCESS";
const UPDATE_VIEW_BUILDS_ACTION_FAILURE = "UPDATE_VIEW_BUILDS_ACTION_FAILURE";
const UPDATE_VIEW_BUILDS_KEY_VALUE = "UPDATE_VIEW_BUILDS_KEY_VALUE";
const UPDATE_VIEW_BUILDS_PUSH = "UPDATE_VIEW_BUILDS_PUSH";
const UPDATE_VIEW_BUILDS_START_NEW = "UPDATE_VIEW_BUILDS_START_NEW";
export const UPDATE_VIEW_BUILDS_ACTION_TYPES = {
    pending: UPDATE_VIEW_BUILDS_ACTION,
    success: UPDATE_VIEW_BUILDS_ACTION_SUCCESS,
    failure: UPDATE_VIEW_BUILDS_ACTION_FAILURE,
    startNewObject: UPDATE_VIEW_BUILDS_START_NEW,
    addKeyValuePair: UPDATE_VIEW_BUILDS_KEY_VALUE,
    push: UPDATE_VIEW_BUILDS_PUSH
};