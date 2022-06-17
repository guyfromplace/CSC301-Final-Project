import axios from "axios";

import {
    FETCH_BRANDS_ACTION_TYPES,
    FETCH_CPU_ACTION_TYPES,
    FETCH_MOBO_ACTION_TYPES,
    FETCH_PRICES_ACTION_TYPES,
    FETCH_GPU_ACTION_TYPES,
    FETCH_PS_ACTION_TYPES,
    FETCH_RAM_ACTION_TYPES,
    FETCH_STORAGE_ACTION_TYPES,
    FETCH_CASE_ACTION_TYPES,
    REGISTRATION_ACTION_TYPES,
    SIGN_IN_ACTION_TYPES,
    SAVE_BUILD_ACTION_TYPES, UPDATE_VIEW_BUILDS_ACTION_TYPES
} from "./actionTypes";

const server_url = "http://localhost:5000/";

export const fetchAllCpus = () => {
    return dispatch => {
        dispatch({ type: FETCH_CPU_ACTION_TYPES.pending });
        return axios.get(server_url + "cpu/getAll")
            .then(response => {
                dispatch({type: FETCH_CPU_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_CPU_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllMobos = () => {
    return dispatch => {
        dispatch({ type: FETCH_MOBO_ACTION_TYPES.pending });
        return axios.get(server_url + "motherboard/getAll")
            .then(response => {
                dispatch({type: FETCH_MOBO_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_MOBO_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllGPUs = () => {
    return dispatch => {
        dispatch({ type: FETCH_GPU_ACTION_TYPES.pending });
        return axios.get(server_url + "gpu/getAll")
            .then(response => {
                dispatch({type: FETCH_GPU_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_GPU_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllPSs = () => {
    return dispatch => {
        dispatch({ type: FETCH_PS_ACTION_TYPES.pending });
        return axios.get(server_url + "power_supply/getAll")
            .then(response => {
                dispatch({type: FETCH_PS_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_PS_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllRAMs = () => {
    return dispatch => {
        dispatch({ type: FETCH_RAM_ACTION_TYPES.pending });
        return axios.get(server_url + "ram/getAll")
            .then(response => {
                dispatch({type: FETCH_RAM_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_RAM_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllStorages = () => {
    return dispatch => {
        dispatch({ type: FETCH_STORAGE_ACTION_TYPES.pending });
        return axios.get(server_url + "storage/getAll")
            .then(response => {
                dispatch({type: FETCH_STORAGE_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_STORAGE_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllCases = () => {
    return dispatch => {
        dispatch({ type: FETCH_CASE_ACTION_TYPES.pending });
        return axios.get(server_url + "case/getAll")
            .then(response => {
                dispatch({type: FETCH_CASE_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_CASE_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchBrands = (productType) => {
    if (productType === "Power Supply"){
        var ptype = "power_supply";
    } else {
        ptype = productType;
    }
    return dispatch => {
        dispatch({ type: FETCH_BRANDS_ACTION_TYPES.pending });
        return axios.get(server_url + `${ptype}/getBrands`)
            .then(response => {
                dispatch({type: FETCH_BRANDS_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_BRANDS_ACTION_TYPES.failure, payload: error});
            })
    }
};

export const fetchPrices = (productType) => {
    if (productType === "Power Supply"){
        var ptype = "power_supply";
    } else {
        ptype = productType;
    }
    return dispatch => {
        dispatch({ type: FETCH_PRICES_ACTION_TYPES.pending });
        return axios.get(server_url + `${ptype}/getPrices`)
            .then(response => {
                dispatch({type: FETCH_PRICES_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_PRICES_ACTION_TYPES.failure, payload: error});
            })
    }
};

export const fetchUsernameValid = (username, type) => {
    return dispatch => {
        dispatch({ type: REGISTRATION_ACTION_TYPES.validUsername.pending });
        if (username === "") {
            return dispatch({ type: REGISTRATION_ACTION_TYPES.validUsername.success, payload: false });
        }
        return axios.get(server_url + `account/getByUsername/${username}`)
            .then(response => type === "s" ?
                dispatch({type: REGISTRATION_ACTION_TYPES.validUsername.success, payload: response.data.length > 0}) :
                dispatch({type: REGISTRATION_ACTION_TYPES.validUsername.success, payload: response.data.length < 1})
            )
            .catch(error => {
                dispatch({type: REGISTRATION_ACTION_TYPES.validUsername.failure, payload: error});
            })

    }
};

export const registerAccount = (name, username, password) => {
    return dispatch => {
        dispatch({ type: REGISTRATION_ACTION_TYPES.registerAccount.pending });
        return axios.post(server_url + `account/makeAccount`, {Name: name, Username: username, Password: password})
            .then(response => {
                dispatch({type: REGISTRATION_ACTION_TYPES.registerAccount.success, payload: true});
            })
            .catch(error => {
                dispatch({type: REGISTRATION_ACTION_TYPES.registerAccount.failure, payload: false});
            })
    }
};

export const signInAccount = (username, password) => {
    return dispatch => {
        dispatch({ type: SIGN_IN_ACTION_TYPES.pending });
        return axios.get(server_url + `account/getByUsername/${username}`)
            .then(response => {
                if (password === response.data[0].Password) {
                    dispatch({type: SIGN_IN_ACTION_TYPES.success, payload: response.data[0]});
                }
                else {
                    dispatch({type: SIGN_IN_ACTION_TYPES.failure, payload: false});
                }
            })
            .catch(error => {
                dispatch({type: SIGN_IN_ACTION_TYPES.failure, payload: false});
            })
    }
};

export const saveBuild = (event) => {
    event.preventDefault();
    return (dispatch, getState) => {
        dispatch({ type: SAVE_BUILD_ACTION_TYPES.pending });
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        let RAMids = [];
        getState().build.RAM.map(r => RAMids.push(r.id));
        let GPUids = [];
        getState().build.GPU.map(g => GPUids.push(g.id));
        let Storageids = [];
        getState().build.Storage.map(s => Storageids.push(s.id));
        axios.post(server_url + "build/makeBuild",
            {Build_Name: event.target[0].value,
                Owner: userInfo._id,
                CPU: getState().build.CPU.id,
                Case: getState().build.Case.id,
                GPU: GPUids,
                PS: getState().build.PS.id,
                RAM: RAMids,
                Storage: Storageids,
                Motherboard: getState().build.Motherboard.id
            })
            .then(response => {
                dispatch({ type: SAVE_BUILD_ACTION_TYPES.success });
                dispatch({ type: SAVE_BUILD_ACTION_TYPES.updateUser.pending });
                axios.post(server_url + "account/addBuild",
                    { id: userInfo._id, buildId: response.data._id })
                    .then (response => {
                        dispatch({ type: SAVE_BUILD_ACTION_TYPES.updateUser.success, payload: response.data });
                    })
                    .catch(error => {
                        dispatch({ type: SAVE_BUILD_ACTION_TYPES.updateUser.failure });
                    })
            })
            .catch(error => {
                dispatch({ type: SAVE_BUILD_ACTION_TYPES.failure });
            })
    }

};

export const fetchBuilds = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let index = -1;
    return dispatch => {
        userInfo.Builds.forEach(b => {
            axios.get(server_url + `build/getBuild/${b}`)
                .then(response => {
                    index++;
                    dispatch({type: UPDATE_VIEW_BUILDS_ACTION_TYPES.startNewObject, payload: {index: b}});
                    if (response.data && response.data.Build_Name) {
                        
                        dispatch({ type: UPDATE_VIEW_BUILDS_ACTION_TYPES.addKeyValuePair,
                            payload: {index: b, key: "Build_Name", value: response.data.Build_Name}});
                        if (response.data.CPU) {
                            axios.get(server_url + `cpu/getCPU/${response.data.CPU}`)
                                .then(response => {
                                    dispatch({ type: UPDATE_VIEW_BUILDS_ACTION_TYPES.addKeyValuePair,
                                        payload: {index: b, key: "CPU", value: response.data.Name}});
                                })
                        }
                        if (response.data.GPU) {
                            response.data.GPU.forEach(g => {
                                axios.get(server_url + `gpu/getGPU/${g}`)
                                    .then(response => {
                                        dispatch({ type: UPDATE_VIEW_BUILDS_ACTION_TYPES.addKeyValuePair,
                                            payload: {index: b, key: "GPU", value: response.data.Name}});
                                    })
                            });
                        }
                        if (response.data.Motherboard) {
                            axios.get(server_url + `motherboard/getMobo/${response.data.Motherboard}`)
                                .then(response => {
                                    dispatch({ type: UPDATE_VIEW_BUILDS_ACTION_TYPES.addKeyValuePair,
                                        payload: {index: b, key: "Motherboard", value: response.data.Name}});
                                })
                        }
                        if (response.data.RAM) {
                            response.data.RAM.forEach(r => {
                                axios.get(server_url + `ram/getRAM/${r}`)
                                    .then(response => {
                                        dispatch({ type: UPDATE_VIEW_BUILDS_ACTION_TYPES.addKeyValuePair,
                                            payload: {index: b, key: "RAM", value: response.data.Name}});
                                    })
                            });
                        }
                        if (response.data.Case) {
                            axios.get(server_url + `case/getCase/${response.data.Case}`)
                                .then(response => {
                                    dispatch({ type: UPDATE_VIEW_BUILDS_ACTION_TYPES.addKeyValuePair,
                                        payload: {index: b, key: "Case", value: response.data.Name}});
                                })
                        }
                        if (response.data.PS) {
                            axios.get(server_url + `power_supply/getPS/${response.data.PS}`)
                                .then(response => {
                                    dispatch({ type: UPDATE_VIEW_BUILDS_ACTION_TYPES.addKeyValuePair,
                                        payload: {index: b, key: "Power Supply", value: response.data.Name}});
                                })
                        }
                        if (response.data.Storage) {
                            response.data.Storage.forEach(s => {
                                axios.get(server_url + `storage/getStorage/${s}`)
                                    .then(response => {
                                        dispatch({ type: UPDATE_VIEW_BUILDS_ACTION_TYPES.addKeyValuePair,
                                            payload: {index: b, key: "Storage", value: response.data.Name}});
                                    })
                            });

                        }
                    }
                })
        });
    }
};
